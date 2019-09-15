<?php
include_once 'conexion.php';
$user_login = $_POST['nombre_usuario'];
$password = $_POST['password'];
echo '<pre>';
var_dump($user_login);
var_dump($password);
echo '</pre>';

//VERIFICAR SI USUARIO EXISTE
$sql = 'SELECT * FROM usuarios WHERE nombre = ?';
$sentencia = $pdo->prepare($sql);
$sentencia->execute(array($user_login));
$resultado = $sentencia->fetch();


    if(!$resultado){
    die();
    }
    echo 'Usuario verificado';

    if(password_verify($password, $resultado['contrasena'])){
        
    }else{
        die();   
    }
?>