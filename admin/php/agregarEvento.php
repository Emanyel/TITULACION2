<?php
$nombreEvento = $_GET['nombreEvento'];
$fecha = $_GET['fecha'];


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "titulacion2";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $query = "INSERT INTO eventos (nombre, fecha) VALUES ('$nombreEvento', '$fecha');";

    if ($conn->query($query) === TRUE) {
        $lastId = $conn->insert_id; 
         //Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
            header('Content-Type: application/json');
            //Guardamos los datos en un array
            $datos = array(
            'estado' => 'ok',
            'nombreEvento' => $nombreEvento, 
            'fecha' => $fecha,
            'id' => $lastId
            );
            //Devolvemos el array pasado a JSON como objeto
            echo json_encode($datos, JSON_FORCE_OBJECT);
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
    $conn->close();
?>