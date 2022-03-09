<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'EpicGames';

$connect =mysqli_connect($host, $user, $password, $dbname);
if(mysqli_connect_errno())
    echo mysqli_connect_error();
