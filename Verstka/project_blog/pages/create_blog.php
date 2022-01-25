<!DOCTYPE html>
<html lang="en">
<head>
    <?php

    include_once $_SERVER['DOCUMENT_ROOT'] . "/project_blog/views/head.php";

    ?>
</head>
<body>

<?php

include_once $_SERVER['DOCUMENT_ROOT'] . "/project_blog/views/header.php";

?>

<div class="creation-form__wrapper">


    <form action="<?= BASE_URL ?>/api/blog/add.php" class="creation-form" method="post">
        <p class="creation-form--title">Новый блог</p>
        <input type="text" placeholder="Введите заголовок блога" name="title" class="creation-form__title">
<!--        <input type="text" placeholder="Выберите категорию" name="category" class="creation-form__category">-->
        <textarea name="description" rows="4" cols="50" class="creation-form__description"
                  placeholder="Введите описание блога"></textarea>


        <?php if (isset($_GET['success'])): ?>

            <?php   if($_GET['success'] == 'yes'): ?>
                <p class="creation-form--title" style="color: green ">Success</p>

            <?php else:?>
                <p class="creation-form--title" style="color: red ">Not Success</p>
            <?php endif;?>




        <?php endif; ?>

        <button type="submit" class="creation-form__button" name="button">Создать</button>

    </form>

</div
</body>
</html>