<?php
$host = "localhost";
$username = "root";   
$password = "";              
$database = "paper_publication";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed: " . $conn->connect_error]);
    exit;
}

// Optional: Set charset to UTF-8
$conn->set_charset("utf8");
?>
