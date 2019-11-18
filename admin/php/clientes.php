<?php
include_once 'conexion.php';
$nombre = $_POST['cliente'];
$apellido = $_POST['apellidos'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$id = $_POST['id'];

$query = "UPDATE clientes SET nombre ='$nombre', apellidos='$apellido', telefono='$telefono', correo='$correo' WHERE id_evento=$id" ;
        if ($conn->query($query) === TRUE) {
             //Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
                header('Content-Type: application/json');
                //Guardamos los datos en un array
                $datos = array(
                'estado' => 'ok',
                );
                //Devolvemos el array pasado a JSON como objeto
                echo json_encode($datos, JSON_FORCE_OBJECT);
        } else {
            echo "Error: " . $query . "<br>" . $conn->error;
        }

        $conn->close();
?>

