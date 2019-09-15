<?php
include_once '../../conexion.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div class="container p-4">
    <div class="title ">
        LOGIN
    </div>
		  <div class="row">
			  <div class="card">
				  <div class="form-group">
                    <form action="../php/registroBD.php" method="POST">
                        <input type="text" name="usuario">
                        <input type="password" name="password1">
                        <input type="password" name="password2">
                        <button class="btn btn-success">LOGIN</button>
                    </form>  
			     </div>
              </div>
        </div>
</div>

</body>
</html>
