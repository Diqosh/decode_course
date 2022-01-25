<?php  require_once $_SERVER['DOCUMENT_ROOT'] . '/shop/views/header.php' ?>
<a href="<?=BASE_URL?>/">back to products</a><br>
<form action="<?=BASE_URL?>/api/add.php" method="post">
    <input type="text" name="name" placeholder="name"><br>
    <input type="text" name="description" placeholder="description"><br>
    <input type="number" name="price" placeholder="price"> <br>
    <input type="number" name="amount" placeholder="amount"><br>
    <button type="submit">submit</button>
</form>

<?php if ($_GET['success'] == 'yes'):?>

    <p style="color: green;">Success</p>
<?php else:?>
    <p style="color: red;">Not success</p>

<?php endif;?>


<?php  require_once $_SERVER['DOCUMENT_ROOT'] . '/shop/views/footer.php' ?>

