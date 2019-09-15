<?php
include_once '../../conexion.php';

$user = $_POST['usuario'];
$pass =$_POST['password1'];
$password2 = $_POST['password2'];
//VERIFICAR SI EXISTE USUARIO

$sql1 = 'SELECT * FROM usuarios WHERE nombre = ?';
$sentencia = $pdo->prepare($sql1);

$sentencia->execute(array($user));
$result = $sentencia->fetch();

    if($result){
       echo 'Usuario ya existente'; 
       die();
    }


if(password_verify($pass, $password2)){
    password_hash($pass, PASSWORD_BCRYPT);
}else {
    echo 'contrasenas diferentes';
}

    $sql = 'INSERT INTO usuarios (nombre, password) VALUES (?, ?)';
    $sentencia = $pdo->prepare($sql);

    if($sentencia->execute(array($user, $pass))){
        echo 'Agregado <br>';
    }


?>