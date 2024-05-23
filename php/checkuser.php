<?php
include "connection.php";
if(!empty($_POST['user_name'])){
    $sql="select * from user_info where username='".$_POST['user_name']."'";
    $res=mysqli_query($conn,$sql);
    $count=mysqli_num_rows($res);
    if($count>0){
        echo "<span style='color:red'>Username already exists!</span>";
        echo "<script>$('#submit').prop('disabled',true);</script>";
    }
    else{
        echo "<span style='color:green'>Username avaliable</span>";
        echo "<script>$('#submit').prop('disabled',false);</script>";
    }
}