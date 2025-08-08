<?php
include '../db.php';
$result = $conn->query("SELECT * FROM issues ORDER BY volume DESC, issue_number DESC");
?>

<h2>All Issues</h2>
<table border="1">
    <tr><th>Volume</th><th>Issue</th><th>Title</th><th>Publication Date</th></tr>
    <?php while($row = $result->fetch_assoc()): ?>
    <tr>
        <td><?= $row['volume'] ?></td>
        <td><?= $row['issue_number'] ?></td>
        <td><?= $row['title'] ?></td>
        <td><?= $row['publication_date'] ?></td>
    </tr>
    <?php endwhile; ?>
</table>
