<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../db.php';

$title = $_POST['title'] ?? '';
$abstract = $_POST['abstract'] ?? '';
$editor_name = $_POST['editor_name'] ?? '';  // FIXED HERE
$author_id = intval($_POST['author_id'] ?? 0);
$issue_id = intval($_POST['issue_id'] ?? 0);

// === Validate inputs ===
if (empty($title) || empty($abstract) || !$author_id || !$issue_id || empty($editor_name)) {
    echo json_encode(["message" => "Missing required fields"]);
    exit;
}

// === Check file upload ===
if (!isset($_FILES['file'])) {
    echo json_encode(["message" => "No file received"]);
    exit;
}

$file = $_FILES['file'];

if ($file['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(["message" => "File upload error: " . $file['error']]);
    exit;
}

$targetDir = "../uploads/";
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0775, true);
}

$filename = basename($file['name']);
$fileType = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

if ($fileType !== 'pdf') {
    echo json_encode(["message" => "Only PDF files allowed"]);
    exit;
}

$uniqueName = uniqid() . "_" . $filename;
$targetFile = $targetDir . $uniqueName;

if (!move_uploaded_file($file["tmp_name"], $targetFile)) {
    echo json_encode(["message" => "Failed to move uploaded file"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO papers (title, abstract, editor_name, file_path, author_id, issue_id) VALUES (?, ?, ?, ?, ?, ?)");
if (!$stmt) {
    echo json_encode(["message" => "Prepare failed: " . $conn->error]);
    exit;
}

$stmt->bind_param("ssssii", $title, $abstract, $editor_name, $uniqueName, $author_id, $issue_id);

if ($stmt->execute()) {
    echo json_encode(["message" => "Paper submitted successfully."]);
} else {
    echo json_encode(["message" => "DB insert error: " . $stmt->error]);
}
?>
