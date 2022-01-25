<?php
require_once "config/all.php";
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
//почему нельзая BASE_URL
include_once $_SERVER['DOCUMENT_ROOT']. "/project_blog/views/header.php";


?>
<div class="main">
    <div class="container">
        <div class="blog_wrapper">
            <div class="blog_header-wrapper">
                <p class="blog_header_text">Блоги по программированию</p>
                <p class="blog_header_description">Популярные и лучшие публикации по программированию для начинающих

                    и профессиональных программистов и IT-специалистов.</p>
            </div>
            <div class="blog_item_wrapper">
                <?php $_result = mysqli_query($connect, "select * from blogs");
                while ($row = mysqli_fetch_assoc($_result)):?>

                <div class="blog_item">
                    <div class="blog_item_image_wrapper"><img src="images/main/blog_1.png" alt=""></div>
                    <pre>

                    </pre>
                    <div class="blog_item_header"> <?=$row['title']?></div>
                    <div class="blog_item_description"><?=$row['description']?></div>
                    <div class="blog_item_data">
                        <div class="date_wrap">
                            <i><img src="images/icons/calendar.svg" alt=""></i>
                            <?=$row['date']?>
                        </div>
                        <div class="viewed_wrap">
                            <i><img src="images/icons/eye.svg" alt=""></i>
                            21
                        </div>
                        <div class="comment_wrap">
                            <i><img src="images/icons/comment.svg" alt=""></i>
                            4
                        </div>
                        <div class="title_wrap">
                            <i><img src="images/icons/title.svg" alt=""></i>
                            Веб-разработка
                        </div>
                        <div class="user_creats_wrap">
                            <i><img src="images/icons/user.svg" alt=""></i>
                            Nast1289
                        </div>
                    </div>
                </div>

            <?php endwhile;?>
            </div>
        </div>

        <div class="category">
            <div class="category_header">
                Категории
            </div>
            <div class="category_list">
                <ul class="category_blog">
                    <li><a href="#">Прогнозы в IT</a></li>
                    <li><a href="#">Мобильная разработка</a></li>
                    <li><a href="#">Фриланс</a></li>
                    <li><a href="#">Алгоритмы</a></li>
                    <li><a href="#">Тестирование IT систем</a></li>
                    <li><a href="#">Разработка игр</a></li>
                    <li><a href="#">Дизайн и юзабилити</a></li>
                    <li><a href="#">Искуственный интелект</a></li>
                    <li><a href="#">Машинное обучение</a></li>
                </ul>
            </div>
        </div>
    </div>


</div>
</body>
</html>