<?php

//Connect to Database
$conn = mysqli_connect('localhost','root','','ajaxtest');

echo 'Processing...';

//Check for GET Variables
if (isset($_GET['name'])) {
    echo 'GET: Your name is '. $_GET['name'];
}

//Check for POST Variables
if (isset($_POST['name2'])) {
    
    $name = mysqli_real_escape_string($conn,$_POST['name2']);
    echo 'POST: Your name is '. $name;

    $query = "INSERT INTO users(name) VALUES('$name')";

    if (mysqli_query($conn, $query)) {
        echo 'User added...';
    }
    else{
        echo 'ERROR '.mysqli_error($conn);
    }
}