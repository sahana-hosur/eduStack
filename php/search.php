<?php
$db_host = 'localhost';
$db_user = 'root'; 
$db_pass = ''; 
$db_name = 'minor-project'; 
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if(isset($_GET['query'])) {
    $search_query = $_GET['query'];

    $sql = "SELECT * FROM files WHERE file_address LIKE '%$search_query%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $files = array();
        while ($row = $result->fetch_assoc()) {
            $files[] = $row;
        }
        echo json_encode($files);
    } else {
        echo json_encode(array('message' => 'No matching files found.'));
    }
} else {
    echo json_encode(array('message' => 'No search query provided.'));
}
$conn->close();