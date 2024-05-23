<?php
include "connection.php";
    session_start();
    $nickname=$_POST['nickname'];
    $dob=$_POST['dob'];
    $std=$_POST['std'];
    $gender=$_POST['gender'];
    $user=$_SESSION['user_id'];
    $sql="update basic_info set nickname='$nickname', dob='$dob', std='$std', gender='$gender' where username like '$user'";
    $res=mysqli_query($conn,$sql);
    echo "<script>window.location.href='../HTML/dashboard.html'</script>";
?>