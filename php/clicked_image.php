<?php
    include 'connection.php';
    session_start();
    $imageSrc=$_POST["image_src"];
    $user=$_SESSION['user_id'];
    $sql="Update save_images set path='$imageSrc' where username='$user'";
    $res=mysqli_query($conn,$sql);
?>
