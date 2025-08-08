<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['id']) && isset($data['username']) && isset($data['password'])) {
    $id = $data['id'];
    $username = $data['username'];
    $password = $data['password'];

    $stmt = $conn->prepare("UPDATE admins SET username = ?, password = ? WHERE id = ?");
    $stmt->bind_param("ssi", $username, $password, $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "User updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Update failed"]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}
?>
