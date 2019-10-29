<?php
$nombreEvento = $_GET['evento'];
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

    $query = "INSERT INTO eventos (nombre, fecha) VALUES ('$nombreEvento', '$fecha')";

    if ($conn->query($query) === TRUE) {
         echo "New record created successfully";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
    $conn->close();
?>