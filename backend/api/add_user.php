<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

$response = [];

if (!empty($username) && !empty($password)) {
    // Securely hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Check if username already exists
    $checkStmt = $conn->prepare("SELECT id FROM admins WHERE username = ?");
    $checkStmt->bind_param("s", $username);
    $checkStmt->execute();
    $checkResult = $checkStmt->get_result();

    if ($checkResult->num_rows > 0) {
        $response = ["success" => false, "message" => "Username already exists"];
    } else {
        // Insert user
        $stmt = $conn->prepare("INSERT INTO admins (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $hashedPassword);
        
        if ($stmt->execute()) {
            $response = ["success" => true, "message" => "User added successfully"];
        } else {
            $response = ["success" => false, "message" => "Failed to add user"];
        }
        $stmt->close();
    }
} else {
    $response = ["success" => false, "message" => "Username and password are required"];
}

$conn->close();
echo json_encode($response);
?>