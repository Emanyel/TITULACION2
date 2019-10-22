<?php
$evento = $_GET['evento'];
$precio = $_GET['precio'];
$direccion = $_GET['direccion'];
$fecha = $_GET['fecha'];
$usuario = $_GET['usuario'];
$empleados = $_GET['empleados'];

$servername = "mysql.hostinger.co.uk";
$database = "u266072517_name";
$username = "u266072517_user";
$password = "buystuffpwd";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";
 
$sql = "INSERT INTO Students (name, lastname, email) VALUES ('$evento', 'Vial', 'thom.v@some.com')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>