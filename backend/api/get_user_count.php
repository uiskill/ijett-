<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include '../db.php';  // adjust path if needed

// Query to count total papers
$result = $conn->query("SELECT COUNT(*) AS total_users FROM admins");

if ($result) {
    $data = $result->fetch_assoc();
    echo json_encode($data);
} else {
    // Return error message if query fails
    echo json_encode(["error" => "Failed to fetch users count"]);
}
