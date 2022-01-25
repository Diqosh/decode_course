<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/shop/config/all.php';


if (isset($_POST['name'],$_POST['description'], $_POST['price'], $_POST['amount']  ) &&
    is_numeric($_POST['price']) && is_numeric($_POST['amount'])) {
        $price = $_POST['price'];
        $description = $_POST['description'];
        $amount = $_POST['amount'];
        $name = $_POST['name'];

        $request = mysqli_query($connect, "insert into shop.products( name, description, price, amount)
                    values ('$name', '$description','$amount', '$name' )");
        header('Location: '. BASE_URL . '/pages/add_product.php?success=yes');


}else{
    header('Location: '. BASE_URL . '/pages/add_product.php?success=no');
}
