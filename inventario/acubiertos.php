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
$descripcion = $_POST['descripcion'];
$descripcion1 = strip_tags($descripcion);
$n_descripcion = strlen($descripcion1);

$cantidad = $_POST["cantidad"];            // Asi recogemos el nombre desde el formulario
    $cantidad1 = strip_tags($cantidad);    // Eliminamos la etiquetas que puedan existir
    $n_cantidad = strlen($cantidad1);      // Contamos el numero de caracteres

$precio = $_POST["precio"];            // Asi recogemos el email desde el formulario
    $precio1 = strip_tags($precio);
    $n_precio = strlen($precio1);

       // Eliminamos la etiquetas que puedan existir

        // Validamos el email de manera muy simple, contempla que exista la @, el . y no exista espacios en blanco

            // Email valido, contamos los caracteres
               // Contamos el numero de caracteres

$total_car = $n_descripcion * $n_cantidad * $n_precio;    // Si alguno de ellos vale 0, $total_car valdrá 0

if ($total_car >= 1) {
    // Abrimos la conexion a la base de datos
    include("conexion.php");
    $_GRABAR_SQL = "INSERT INTO $tabla_db3 (idcubierto,descripcion, cantidad, precio) VALUES (null,'$descripcion','$cantidad','$precio')";
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
