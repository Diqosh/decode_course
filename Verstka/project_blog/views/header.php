<?php

    include_once $_SERVER['DOCUMENT_ROOT']. "/project_blog/config/all.php";

?>
<header>
    <div class="container">
        <div class="logo"><a href="<?=BASE_URL?>/">Decode Blog</a></div>
        <div class="search"><input type="text" name="" id="" placeholder="Поиск по блогам">
            <button><i><img src="images/icons/loop.svg" alt=""></i>Найти</button>
        </div>
        <div class="auth_buttons_wrapper">
            <button><a href="<?=BASE_URL?>/pages/register.php">Регистрация</a></button>
            <button><a href="<?=BASE_URL?>/pages/login.php">Вход</a></button>
        </div>

    </div>

</header>

