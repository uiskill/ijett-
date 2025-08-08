<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require '../db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $id = $_POST['id'];
    $title = $_POST['title'];
    $abstract = $_POST['abstract'];
    $author_id = $_POST['author_id'];
    $editor_name = $_POST['editor_name'];
    $issue_id = $_POST['issue_id'];

    // File handling
    $filePath = '';
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = '../uploads/';
        $fileName = basename($_FILES['file']['name']);
        $targetFilePath = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFilePath)) {
            $filePath = $fileName;
        } else {
            echo json_encode(["success" => false, "message" => "File upload failed"]);
            exit();
        }
    }

    // Build SQL query based on whether file is updated
    if ($filePath !== '') {
        $sql = "UPDATE papers SET title = ?, abstract = ?, author_id = ?, editor_name = ?, issue_id = ?, file_path = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssisssi", $title, $abstract, $author_id, $editor_name, $issue_id, $filePath, $id);
    } else {
        $sql = "UPDATE papers SET title = ?, abstract = ?, author_id = ?, editor_name = ?, issue_id = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssissi", $title, $abstract, $author_id, $editor_name, $issue_id, $id);
    }

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Paper updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Update failed", "error" => $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
