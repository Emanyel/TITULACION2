<?php
include_once 'conexion.php';

$numItem = $_POST["id"];
$query = "DELETE FROM evento WHERE id =$numItem LIMIT 1";

if ($conn->query($query) === TRUE){
    header('Content-Type: application/json');
                //Guardamos los datos en un array
                $datos = array(
                'estado' => 'ok',
                'id'=> $numItem
                );
                //Devolvemos el array pasado a JSON como objeto
                echo json_encode($datos, JSON_FORCE_OBJECT);

}else{
    echo "Error: " . $query . "<br>" . $conn->error;

}

$conn->close();

?>