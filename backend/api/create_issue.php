<?php
// Allow CORS (for development)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

include '../db.php'; // assumes you have $conn = new mysqli(...);

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["message" => "No input received"]);
    exit;
}

$volume = intval($data['volume']);
$issue_number = intval($data['issue_number']);
$title = trim($data['title']);
$publication_date = $data['publication_date'];
$year = $data['year'];

$stmt = $conn->prepare("INSERT INTO issues (volume, issue_number, title, publication_date, year) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("iissi", $volume, $issue_number, $title, $publication_date, $year);

if ($stmt->execute()) {
    echo json_encode(["message" => "Issue created successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $stmt->error]);
}
