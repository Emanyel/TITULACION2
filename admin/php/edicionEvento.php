<?php
include_once 'conexion.php';
$cliente = $_POST['cliente'];
$apellido = $_POST['apellidos'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mesas = $_POST['mesas'];
$extras = $_POST['extras'];
$nombreEvento = $_POST['evento'];
$direccionEvento = $_POST['direccion'];
$fechaEvento = $_POST['fecha'];

    if(is_null($direccionEvento) && is_null($nombreEvento) && is_null($fechaEvento)){
        $query = "UPDATE cliente SET cliente = $cliente, apellidos=$apellido, telefono=$telefono, correo=$correo; 
        UPDATE descripcionEventos SET mesas=$mesas, extras=$extras";
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
    }else{
        $query = "UPDATE cliente SET cliente = $cliente, apellidos=$apellido, telefono=$telefono, correo=$correo; 
        UPDATE descripcionEventos SET evento=$nombreEvento, direccion=$direccionEvento, fecha=$fechaEvento, mesas=$mesas, extras=$extras";
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
    }


?>