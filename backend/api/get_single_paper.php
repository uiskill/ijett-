<?php
header('Content-Type: application/json');

// Allow cross-origin requests (for local testing)
header("Access-Control-Allow-Origin: *");

// Database connection
include '../db.php'; // Update path as needed

$response = [];

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);

    $query = "SELECT * FROM papers WHERE id = ?";
    $stmt = $conn->prepare($query);

    if ($stmt) {
        $stmt->bind_param("i", $id);
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $paper = $result->fetch_assoc();
            $response['success'] = true;
            $response['paper'] = $paper;
        } else {
            $response['success'] = false;
            $response['message'] = "Paper not found.";
        }

        $stmt->close();
    } else {
        $response['success'] = false;
        $response['message'] = "Query failed.";
    }
} else {
    $response['success'] = false;
    $response['message'] = "ID parameter missing.";
}

echo json_encode($response);
?>
