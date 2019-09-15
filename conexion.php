<?php
$link = 'mysql:host=localhost;dbname=SAT';
$usuario = 'emmanuel';
$password = '123456';

try{

    $pdo = new PDO($link, $usuario, $password);
}catch(PDOException $e){
    print " Error:". $e->getMessage()."<br>";
    die();
}


?>