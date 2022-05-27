<?php
$link = mysqli_connect('localhost', 'a0670210_book', 'book');
mysqli_select_db($link,'a0670210_book');
$query = 'SELECT * FROM book';
$result = mysqli_query($link,$query);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title></title>
	<link rel="stylesheet" href="css/style.css">
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body align="center">
    <div class="book" id="wrap">
        <table align="center" width="100%" cellspacing="1" cellpadding="1" border="1">
            <caption><h1>Книги</h1></caption>
					<tr>
						     <th height="50" width="30px">№</th>
                             <th height="50" width="40px">Название</th>
                             <th height="50" width="30px">Автор</th>
                             <th height="50" width="500px">Краткое описание</th>
                             <th height="50" width="20px">Рейтинг</th>
                             <th height="50" width="20px">Цена</th>
                             <th height="50" width="30px">Магазин</th>
					</tr>
					<?php
					while ($row = mysqli_fetch_array($result)) {?>
						<tr data-id="<?=$row['id']?>">
							<td height="25" class="id"><?=$row['id']?></td>
							<td height="25" class="edit nam"><?=$row['nam']?></td>
							<td height="25" class="edit avt"><?=$row['avt']?></td>
							<td height="25" class="edit tit"><?=$row['tit']?></td>
							<td height="25" class="edit rat"><?=$row['rat']?></td>
							<td height="25" class="edit pri"><?=$row['pri']?></td>
							<td height="25" class="edit mag"><?=$row['mag']?></td>
						</tr>
					<?php } ?>
		</table>
	<button class="new">Новая книга!</button>
	</div>

<script type="text/javascript" src="js/script.js"></script>
</body>
</html>
<?php
mysqli_free_result($result);
mysqli_close($link);
?>