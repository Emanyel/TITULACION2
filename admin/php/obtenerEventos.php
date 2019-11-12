<?php
include_once 'conexion2.php';


$query = "SELECT * FROM evento";
$stmt = $DBcon->prepare($query);
$stmt->execute();
    $userData = array();
    while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
  
        $userData[] = $row;
    }
        echo json_encode($userData);
?>