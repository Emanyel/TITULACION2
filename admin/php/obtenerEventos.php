<?php
include_once 'conexion.php';

$query = "SELECT * FROM eventos";
if ($conn->query($query) === TRUE) {
     //Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
        header('Content-Type: application/json');
        //Guardamos los datos en un array
        $datos = array(
        'estado' => 'ok',
        'nombreEvento' => $nombreEvento, 
        'fecha' => $fecha,
        'id' => $id,
        );
        //Devolvemos el array pasado a JSON como objeto
        $query = "INSERT INTO descripcionEventos (id_evento) VALUES ($lastId) ON DUPLICATE KEY UPDATE direccion=$direccion";

        echo json_encode($datos, JSON_FORCE_OBJECT);
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}
$conn->close();
?>