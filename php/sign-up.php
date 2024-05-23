<?php
include 'connection.php';
if($conn){
    $f_name=$_POST['first_name'];
    $m_name=$_POST['middle_name'];
    $l_name=$_POST['last_name'];
    $email=$_POST['email'];
    $username=$_POST['user_name'];
    $pass=$_POST['pwd'];
    $sql= "INSERT INTO user_info VALUES('$f_name','$m_name','$l_name','$email','$username' ,'$pass')";
    $res=mysqli_query($conn, $sql);
    $sql2="insert into basic_info values ('$username','','','','')";
    $res2=mysqli_query($conn,$sql2);
    $sql3="insert into save_images values ('$username','../Assets/bitmoji.jpg')";
    $res3=mysqli_query($conn,$sql3);
    $sql4="insert into todolist values ('$username','err','err','')";
    $res4=mysqli_query($conn,$sql4);
    if($res && $res2 && $res3 && $res4){
        echo "<script>window.alert('Account Created Successfully')</script>"; 
        echo "<script>window.location.href='../HTML/sign-in.html'</script>"; 
    }
}