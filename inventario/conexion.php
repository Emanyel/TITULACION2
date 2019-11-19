<?php

// Parametros a configurar para la conexion de la base de datos

$hotsdb = "localhost";    // sera el valor de nuestra BD
$basededatos = "titulacion2";    // sera el valor de nuestra BD

$usuariodb = "root";    // sera el valor de nuestra BD
$clavedb = "";    // sera el valor de nuestra BD
$tabla_db1 = "sillas";
$tabla_db2 = "mesas";
$tabla_db3= "cubiertos";
$tabla_db4 = "entretenimiento";
$tabla_db5 = "salones";
$tabla_db6 = "musica";// sera el valor de una tabl    // sera el valor de otra tabla

// Fin de los parametros a configurar para la conexion de la base de datos

$conexion_db = mysqli_connect("$hotsdb","$usuariodb","$clavedb")
    or die ("Conexión denegada, el Servidor de Base de datos que solicitas NO EXISTE");
    $db = mysqli_select_db($conexion_db,"$basededatos")
    or die ("La Base de Datos <b>$basededatos</b> NO EXISTE");
?>
