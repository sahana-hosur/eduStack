<?php
include 'connection.php';
session_start();
$user= $_SESSION['user_id'];
if($conn){
    $sql= "SELECT * 
            FROM basic_info b
            join  save_images  s on b.username=s.username 
            -- join  todolist t on s.username=t.username 
            WHERE b.username='$user'";
    $res= mysqli_query($conn,$sql); 
    $data=[];
    if (mysqli_num_rows($res) > 0) {
        while($row = mysqli_fetch_array($res)) {
          $data[] = $row;
        }
      }

    $json_data=json_encode($data);

    echo  "$json_data";
}