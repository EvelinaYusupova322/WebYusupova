<?php
$link = mysqli_connect('localhost', 'a0670210_book', 'book');
mysqli_select_db($link,'a0670210_book');
$query = "INSERT INTO `book` (`id`, `nam`, `avt`, `tit`, `rat`, `pri`, `mag`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL)";
$result = mysqli_query($link,$query);
?>