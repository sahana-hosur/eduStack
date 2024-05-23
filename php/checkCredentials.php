<?php
include "connection.php";
function checkCredentials($username, $password, $conn) {
    session_start();
    $query = "SELECT * FROM user_info WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($query);
    $_SESSION['user_id']=$username;
    return ($result->num_rows > 0);
}
$username = $_POST['username'];
$password = $_POST['password'];
if (checkCredentials($username, $password, $conn)) {
    echo 'success';
} else {
    echo 'error';
}
$conn->close();
?>
