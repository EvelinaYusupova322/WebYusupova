<?php
$link = mysqli_connect('localhost', 'a0670210_book', 'book');
mysqli_select_db($link,'a0670210_book');

$tableName = $_POST['table'];
$fieldName = $_POST['field'];
$value = $_POST['value'];
$id = $_POST['id'];

$query = "UPDATE book SET $fieldName = '$value' WHERE id = $id";
$result = mysqli_query($link,$query);
?>