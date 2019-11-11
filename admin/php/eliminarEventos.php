<?php
$numItem = $_POST[numItem];
include_once 'conexion.php';
$query = "DELETE FROM eventos WHERE id =$numItem LIMIT 1";
$stmt = $DBcon->prepare($query);
$stmt->execute();
if($stmt->execute($params)){

}else{
    
}

?>