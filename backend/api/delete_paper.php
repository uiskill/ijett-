<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id']) || !is_numeric($data['id'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid ID']);
    exit;
}

$id = intval($data['id']);

// Optional: Get file path to delete file from uploads folder
$result = $conn->query("SELECT file_path FROM papers WHERE id = $id");
if ($result && $row = $result->fetch_assoc()) {
    $file = '../uploads/' . $row['file_path'];
    if (file_exists($file)) {
        unlink($file); // delete file
    }
}

// Delete from database
$stmt = $conn->prepare("DELETE FROM papers WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Delete failed']);
}

$stmt->close();
$conn->close();
?>
