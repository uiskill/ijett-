<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include '../db.php';

$sql = "
  SELECT 
    p.id, 
    p.title, 
    p.abstract, 
    p.file_path, 
    p.author_id, 
    p.issue_id, 
    p.uploaded_at, 
    p.editor_name,
    CONCAT('Vol ', i.volume, ', Issue ', i.issue_number) AS issue_title
  FROM papers p
  LEFT JOIN issues i ON p.issue_id = i.id
  ORDER BY p.id DESC
";

$result = $conn->query($sql);
if (!$result) {
    echo json_encode(['message' => 'Query error: ' . $conn->error]);
    exit;
}

$papers = [];

while ($row = $result->fetch_assoc()) {
    $papers[] = $row;
}

echo json_encode(["papers" => $papers]);
?>
