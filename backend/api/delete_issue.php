<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Include DB connection (this should set up $conn)
include '../db.php';

// Validate ID
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid or missing ID']);
    exit;
}

$id = intval($_GET['id']);

// Prepare and execute DELETE query
$stmt = $conn->prepare("DELETE FROM issues WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Issue deleted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to delete issue']);
}

$stmt->close();
$conn->close();
?>
