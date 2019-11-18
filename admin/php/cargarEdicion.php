<?php
include_once 'conexion.php';
$id = $_GET['id'];
$query = 'SELECT id_cliente, nombre, apellidos, telefono, correo FROM clientes WHERE id_evento = $id';
?>