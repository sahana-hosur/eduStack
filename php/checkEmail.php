<?php
include "connection.php";
if(!empty($_POST['email'])){
    $sql="select * from user_info where email='".$_POST['email']."'";
    $res=mysqli_query($conn,$sql);
    $count=mysqli_num_rows($res);
    if($count>0){
        echo "<span style='color:red'>Email already registered!</span>";
        echo "<script>$('#submit').prop('disabled',true);</script>";
    }
    // else{
    //     echo "<span style='color:green'>Username avaliable</span>";
    //     echo "<script>$('#submit').prop('disabled',false);</script>";
    // }
}