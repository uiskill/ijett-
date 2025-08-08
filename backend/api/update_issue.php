<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include '../db.php';

// Get JSON input from request
$data = json_decode(file_get_contents("php://input"), true);

if (
    isset($data['id']) &&
    isset($data['volume']) &&
    isset($data['issue_number']) &&
    isset($data['title']) &&
    isset($data['year'])
) {
    $id = $data['id'];
    $volume = $data['volume'];
    $issue_number = $data['issue_number'];
    $title = $data['title'];
    $year = $data['year'];

    $stmt = $conn->prepare("UPDATE issues SET volume = ?, issue_number = ?, title = ?, year = ? WHERE id = ?");
    $stmt->bind_param("ssssi", $volume, $issue_number, $title, $year, $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Issue updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update issue"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid input data"]);
}
?>
