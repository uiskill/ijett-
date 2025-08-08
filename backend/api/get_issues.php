<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include '../db.php'; // Check DB connection here!

$sql = "SELECT id, year, volume, issue_number, title FROM issues ORDER BY volume DESC, issue_number DESC";
$result = $conn->query($sql);

$issues = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $issues[] = $row;
    }
    echo json_encode(["issues" => $issues]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Database query failed"]);
}


