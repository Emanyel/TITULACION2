<?php
include("conexion.php");
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<title> INVENTARIO DE SILLAS</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="C:\ALQUILADORA\ALQUILADORA.github.io-master\admin\style\estilos.css">
 <!-- Bootstrap core CSS -->
   <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
   <!-- Custom styles for this template -->
   <link href="assets/css/small-business.css" rel="stylesheet">
   <link href="assets/css/custom.css" rel="stylesheet" />

 	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
 		  <script src="sweetalert2.all.min.js"></script>
	<!-- LIBRERIAS BOOTSTRAP-->

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
<script src="bootstrap/js/bootstrap.min.js"></script>
</head>
<div class="navbar navbar-inverse navbar-fixed-top">
	 <div class="adjust-nav">
			 <span class="logout-spn" >
				 <a  style="color:#fff;">ALQUILADORA KARINA</a>
			 </span>
	 </div>
	 <div class="nav-logo">
		 <span class="logout-spn">
			 <a style="color:#fff;" href="index.html" class="mayusculas">
					 INVENTARIO
			 </a>
		</span>
	 </div>

</div>
<body>
		<h2>Inventario Sillas</h2>
			<hr />
    	<br />
  <div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Cubre sillas</th>
      <th scope="col">Precio Cubre Sillas</th>
      <th scope="col">Modificar</th>
      <th scope="col">Eliminar</th>

    </tr>
  </thead>
  <tbody>
    <?php
      $sql = mysqli_query($conexion_db, "SELECT * FROM $tabla_db1 ");
      $sql = mysqli_query($conexion_db, "SELECT * FROM $tabla_db1 ORDER BY idsilla DESC");

    if(mysqli_num_rows($sql) == 0){
      echo '<tr><td colspan="8">No hay datos.</td></tr>';
    }else{
      $no = 1;
      while($row = mysqli_fetch_assoc($sql)){
        echo '
        <tr>
          <th>'.$no.'</th>
          <td>'.$row['descripcion'].'</td>
          <td>'.$row['cantidad'].'</td>
          <td>'.$row['precio'].'</td>
          <td>'.$row['cubre'].'</td>
          <td>'.$row['precio_cubre'].'</td>
					<td>';
          $no++;
      }
    }
    ?>
		<td><button type="button" name="button" src=".\assets\img\delete.png"> </button></td>
  </tbody>
</table>
    </div>
    <div class="col-sm">

    </div>
  </div>
</div>
</body>
<br><br><br><br>
<footer class="page-footer font-small unique-color-dark">

  <div style="background-color: #4BAEA0;">
    <div class="container">

        <!-- Copyright -->
        <!-- Grid row-->
      <div class="row py-4 d-flex align-items-center">
        <div style="color:#fff;" class="footer-copyright text-center py-3">© 2019 Copyright:ALQUILADORA KARINA
          </div>

        <!-- Grid column -->

        <!-- Grid column -->

        <!-- Grid column -->

        <!-- Grid column -->

      </div>
      <!-- Grid row-->

    </div>
  </div>

  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5">

    <!-- Grid row -->

  <!-- Footer Links -->

  <!-- Copyright -->

</footer>
</html>
