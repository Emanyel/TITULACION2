<?php
include_once 'conexion.php';

$nombreEvento = $_GET['nombreEvento'];
$fecha = $_GET['fecha'];

    $query = "INSERT INTO evento (nombre_evento, fecha) VALUES ('$nombreEvento', '$fecha');";

    if ($conn->query($query) === TRUE) {
        $lastId = $conn->insert_id; 
         //Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
            header('Content-Type: application/json');
            //Guardamos los datos en un array
            $datos = array(
            'estado' => 'ok',
            'nombreEvento' => $nombreEvento, 
            'fecha' => $fecha,
            'direccion',
            'id' => $lastId,
            );
            //Devolvemos el array pasado a JSON como objeto
            echo json_encode($datos, JSON_FORCE_OBJECT);
    } else {
        $datos1 = array(
            'estado' => 'bad'
        );
        //Devolvemos el array pasado a JSON como objeto
        echo json_encode($datos1, JSON_FORCE_OBJECT);
    }
    $conn->close();
?>