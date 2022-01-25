<?php  require_once $_SERVER['DOCUMENT_ROOT'] . '/shop/views/header.php' ?>

<a href="<?=BASE_URL?>/pages/add_product.php">add products</a>
<?php
    $result = mysqli_query($connect, "select * from products");
    while ($row = mysqli_fetch_assoc($result)):?>
        <p><span style="color: green">name </span><?=$row['name']?></p>
        <p><span style="color: green">description </span><?=$row['description']?></p>
        <p><span style="color: green">price </span><?=$row['price']?></p>
        <p><span style="color: green">amount </span><?=$row['amount']?></p>
        <hr>
    <?php endwhile;?>
<?php  require_once $_SERVER['DOCUMENT_ROOT'] . '/shop/views/footer.php' ?>


