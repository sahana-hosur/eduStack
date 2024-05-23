<?php
session_start();
if(isset($_FILES['pdf_file'])) {
    $file_name = $_FILES['pdf_file']['name'];
    $file_tmp = $_FILES['pdf_file']['tmp_name'];
    $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    $allowed_ext = array('pdf');

    if(in_array($file_ext, $allowed_ext)) {
        // Move the uploaded file to a permanent location
        $upload_directory = '../uploads';
        $file_path = $upload_directory . '/' .$file_name;
        if (!move_uploaded_file($file_tmp, $file_path)) {
            $error = error_get_last();
            echo "Error moving file: " . $error['message'];
        }
        
        $db_host = 'localhost';
        $db_user = 'root'; 
        $db_pass = ''; 
        $db_name = 'minor-project'; 

        $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $user=$_SESSION['user_id'];
        $sql = "INSERT INTO files (file_address,username) VALUES ('$file_path','$user')";
        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('File Uploaded Successfully')</script>";
            echo "<script>window.location.href='../HTML/dashboard.html'</script>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
    } else {
        echo "Only PDF files are allowed.";
    }
} else {
    echo "No file uploaded.";
}