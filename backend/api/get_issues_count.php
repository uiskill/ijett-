<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include '../db.php';  // adjust path as needed

// Query to count total issues
$result = $conn->query("SELECT COUNT(*) AS total_issues FROM issues");

if ($result) {
    $data = $result->fetch_assoc();
    echo json_encode($data);
} else {
    // Return error message if query fails
    echo json_encode(["error" => "Failed to fetch issues count"]);
}
