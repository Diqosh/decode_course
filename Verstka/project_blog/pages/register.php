<?php

    include_once $_SERVER['DOCUMENT_ROOT'] . '/project_blog/config/all.php'

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php

    include_once $_SERVER['DOCUMENT_ROOT']. "/project_blog/views/head.php";

    ?>
</head>
<body>
<?php

include_once $_SERVER['DOCUMENT_ROOT']. "/project_blog/views/header.php";

?>
<div class="login_wrapper">
    <div class="login_box">
        <form action=""><p>Регистрация</p>
            <input type="text" placeholder="Введите email">
            <input type="text" placeholder="Введите полное имя">
            <input type="password" placeholder="Введите пароль">
            <input type="password" placeholder="Подтвердите пароль">
            <button>       Зарегистрироваться</button>
        </form>

    </div>
</div>
</body>
</html>