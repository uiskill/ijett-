<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include '../db.php';

$issue_id = intval($_GET['issue_id'] ?? 0);

if ($issue_id === 0) {
  echo json_encode(["papers" => []]);
  exit;
}

$stmt = $conn->prepare("
  SELECT id, title, abstract, file_path, author_id,editor_name
  FROM papers 
  WHERE issue_id = ?
  ORDER BY id DESC
");
$stmt->bind_param("i", $issue_id);
$stmt->execute();

$result = $stmt->get_result();
$papers = [];

while ($row = $result->fetch_assoc()) {
  $papers[] = $row;
}

echo json_encode(["papers" => $papers]);
?>
