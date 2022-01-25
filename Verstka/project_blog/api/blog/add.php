<?php

include $_SERVER['DOCUMENT_ROOT'] . '/project_blog/config/all.php';


if (isset($_POST['title']) && isset($_POST['description']) &&
    strlen($_POST['title']) != 0 && strlen($_POST['description']) != 0) {
        $title = $_POST["title"];
        $description = $_POST["description"];
        $result = mysqli_query($connect, "insert into blogs( title, description ) values ('$title', '$description')");
        header('Location:' . BASE_URL . '/pages/create_blog.php?success=yes');
}else{
    header('Location:' . BASE_URL . '/pages/create_blog.php?success=no');
}

