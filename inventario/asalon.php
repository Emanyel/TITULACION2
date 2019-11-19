<html>
<head>
<title>Guardamos los datos en la base de datos</title>
<META name='robot' content='noindex, nofollow'>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>
<body>
<?php
$r= 0;
// Recibimos por POST los datos procedentes del formulario
$nombre = $_POST['nombre'];
$nombre1 = strip_tags($nombre);
$n_nombre = strlen($nombre1);

$calle = $_POST['calle'];
$calle1 = strip_tags($calle);
$n_calle = strlen($calle1);

$colonia = $_POST['colonia'];
$colonia1 = strip_tags($colonia);
$n_colonia = strlen($colonia1);

$estado = $_POST['estado'];
$estado1 = strip_tags($estado);
$n_estado = strlen($estado1);

$municipio = $_POST["municipio"];            // Asi recogemos el nombre desde el formulario
$municipio1 = strip_tags($municipio);    // Eliminamos la etiquetas que puedan existir
$n_municipio = strlen($municipio1);      // Contamos el numero de caracteres

$telefono = $_POST['telefono'];
$telefono1 = strip_tags($telefono);
$n_telefono = strlen($telefono1);

$contacto = $_POST['contacto'];
$contacto1 = strip_tags($contacto);
$n_contacto = strlen($contacto1);

$precio = $_POST["precio"];            // Asi recogemos el email desde el formulario
$precio1 = strip_tags($precio);
$n_precio = strlen($precio1);         // Eliminamos la etiquetas que puedan existir


$total_car = $n_nombre * $n_calle * $n_colonia * $n_estado * $n_municipio * $n_telefono * $n_contacto * $n_precio;   // Si alguno de ellos vale 0, $total_car valdrá 0

if ($total_car >= 1) {
    // Abrimos la conexion a la base de datos
    include("conexion.php");
    $_GRABAR_SQL = "INSERT INTO $tabla_db5 (idsalon,nombre, calle, colonia, estado, municipio, telefono, contacto, precio) VALUES (null,'$nombre','$calle','$colonia','$estado','$municipio','$telefono','$contacto','$precio')";
    mysqli_query($conexion_db,$_GRABAR_SQL);

    // Cerramos la conexion a la base de datos
     include("cerrarconexion.php");
     $r = 1;
    // Confirmamos que el registro ha sido insertado con exito
    }

          if ($r == 1) {
          echo "<script>jQuery(function(){swal('¡Bien!', 'Registro Guardado', 'success','3000');});</script>" ;
          }
          else {
            echo "<script>jQuery(function(){swal('¡¡Error!','Error, no se ha guardado','warning',timmer='3000');});</script>";
          }
?>
</body>


</html>
