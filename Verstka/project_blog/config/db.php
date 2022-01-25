<?php
    $host = 'localhost';
    $user = 'Diqosh';
    $password = '';
    $dbname = 'blog';

    $connect = mysqli_connect($host, $user ,$password, $dbname);
    if(mysqli_connect_errno())
        exit("Could not connect to database");
