<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
 <title>Inventario </title>
 <link rel="stylesheet" href="C:\ALQUILADORA\ALQUILADORA.github.io-master\admin\style\estilos.css">
<!-- Bootstrap core CSS -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link href="assets/css/small-business.css" rel="stylesheet">
  <link href="assets/css/custom.css" rel="stylesheet" />
</head>
<body>
  <!-- Navigation -->
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

  <!-- Page Content -->
  <div class="container">

    <!-- Heading Row -->
    <!-- /.row -->

    <!-- Call to Action Well -->
    <div class="card text-white bg-secondary my-5 py-4 text-center">
      <div class="card-body">
        <p class="text-white m-0">EN ESTA PARTE USTED PUEDE GESTIONAR EL INVENTARIO DE SALONES </p>
      </div>
    </div>


    <!-- Content Row -->
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">SALONES</h2>
            <p class="card-text"></p>
            <img src="./assets\img\partyroom.png">

            </div>
          <div class="row">
  <div class="col-6">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action list-group-item-light active"  id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Agregar</a>
      <a class="list-group-item list-group-item-action list-group-item-light" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Inventario</a>

    </div>
  </div>
  </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-8 mb-8">
        <div class="card h-100">
          <div class="card-body">
            <div class="col-12">
              <div class="tab-content align:center" id="nav-tabContent">

                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                  <h2 class="card-title">Agregar salón </h2>
                  <form class="" action="../inventario/asalon.php" method="post">
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text"  id="cantidad">Nombre</span>
                      </div>
                      <input type="text" class="form-control" name="nombre" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="precio">Calle</span>
                      </div>
                      <input type="text" class="form-control" name="calle" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="precio">Colonia</span>
                      </div>
                      <input type="text" class="form-control" name="colonia" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text"  id="cantidad">Estado</span>
                      </div>
                      <input type="text" class="form-control" name="estado" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="precio">Municipio</span>
                      </div>
                      <input type="text" class="form-control" name="municipio" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text"  id="cantidad">Teléfono</span>
                      </div>
                      <input type="text" class="form-control" name="telefono" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="precio">Responsable</span>
                      </div>
                      <input type="text" class="form-control" name="contacto" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="precio">Precio</span>
                      </div>
                      <input type="text" class="form-control" name="precio" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <button type="submit" class="btn btn-outline-danger">Guardar</button>
                    </form>
                </div>

                <div class="tab-pane fade"  id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                  <h2 class="card-title">Inventario de salones </h2>
                  <?php
                  include("conexion.php");
                  ?>
                  <div class="container">
                  <div class="row">
                  <div class="col-md-12">
                <div class="table-responsive">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Calle</th>
                      <th scope="col">Colonia</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Municipio</th>
                      <th scope="col">Teléfono</th>
                      <th scope="col">Contacto</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Modificar</th>
                      <th scope="col">Eliminar</th>

                    </tr>
                  </thead>
                  <tbody>
                    <?php
                      $sql = mysqli_query($conexion_db, "SELECT * FROM $tabla_db5 ");
                      $sql = mysqli_query($conexion_db, "SELECT * FROM $tabla_db5 ORDER BY idsalon DESC");

                    if(mysqli_num_rows($sql) == 0){
                      echo '<tr> <td colspan="8">No hay datos.</td> </tr>';
                    }else{
                      $no = 1;
                      while($row = mysqli_fetch_assoc($sql)){
                        echo '
                        <tr>
                          <th>'.$no.'</th>
                          <td>'.$row['nombre'].'</td>
                          <td>'.$row['calle'].'</td>
                          <td>'.$row['colonia'].'</td>
                          <td>'.$row['estado'].'</td>
                          <td>'.$row['municipio'].'</td>
                          <td>'.$row['telefono'].'</td>
                          <td>'.$row['contacto'].'</td>
                          <td>'.$row['precio'].'</td>
                          <td> <button><img src=".\assets\img\update.png"> </button></td>
                          <td> <button><img src=".\assets\img\delete.png"> </button></td>
                          ';
                          $no++;
                      }
                    }
                    ?>
                  </tbody>
                </table>
                </div>
                <button onclick="javascript:window.location.reload();" ><img src=".\assets\img\refresh.png"> </button>
                    </div>
                  </div>
                </div>
                </div>

                </div>
            </div>

            <p class="card-text"></p>
          </div>

        </div>
      </div>
      <!-- /.col-md-4 -->

      <!-- /.col-md-4 -->

    </div>
    <!-- /.row -->

  </div>
  <br>
  <br>
  <!-- /.container -->

  <!-- Footer -->
  <!-- Footer -->
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
<!-- Footer -->

  <!-- Bootstrap core JavaScript -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>

</html>
