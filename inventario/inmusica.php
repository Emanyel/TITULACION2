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
        <p class="text-white m-0">EN ESTA PARTE USTED PUEDE GESTIONAR EL INVENTARIO DE MÚSICA </p>
      </div>
    </div>


    <!-- Content Row -->
    <div class="row">
      <div class="col-md-5 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">MÚSICA</h2>
            <p class="card-text"></p>
            <img src=".\assets\img\karaoke.png">

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
      <div class="col-md-7 mb-7">
        <div class="card h-100">
          <div class="card-body">
            <div class="col-8">
              <div class="tab-content align:center" id="nav-tabContent">

                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                  <h2 class="card-title">Agregar música </h2>
                  <form class="" action="../inventario/amusica.php" method="post">
                    <div class="form-group">
                      <label for="mostrar-precio">Descripcion</label>
                      <select class="form-control" name="descripcion" id="mostrar-precio">
                            <option value="DJ versátil">DJ versátil</option>
                            <option value="Mariachi">Mariachi</option>
                            <option value="Karaoke">Karaoke</option>
                      </select>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text"  id="cantidad">Precio por Hora</span>
                        </div>
                        <input type="text" class="form-control" name="precio" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">Detalles</span>
                        </div>
                        <textarea class="form-control" name="detalles" aria-label="With textarea"></textarea>
                      </div>
                      <br>
                  <button type="submit" class="btn btn-outline-danger">Guardar</button>
                </form>
                </div>
                <div class="tab-pane fade"  id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                  <h2 class="card-title">Inventario cubiertos </h2>
                  <?php
                  include("conexion.php");
                  ?>
                  <div class="container">
                  <div class="row">
                  <div class="col-sm">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Precio por Hora</th>
                      <th scope="col">Detalles</th>
                      <th scope="col">Modificar</th>
                      <th scope="col">Eliminar</th>

                    </tr>
                  </thead>
                  <tbody>
                    <?php
                      $sql = mysqli_query($conexion_db, "SELECT * FROM $tabla_db6 ");
                      $sql = mysqli_query($conexion_db, "SELECT * FROM $tabla_db6 ORDER BY idmusica DESC");

                    if(mysqli_num_rows($sql) == 0){
                      echo '<tr> <td colspan="8">No hay datos.</td> </tr>';
                    }else{
                      $no = 1;
                      while($row = mysqli_fetch_assoc($sql)){
                        echo '
                        <tr>
                          <th>'.$no.'</th>
                          <td>'.$row['descripcion'].'</td>
                          <td>'.$row['precio'].'</td>
                          <td>'.$row['detalles'].'</td>
                          <td> <button><img src=".\assets\img\update.png"> </button></td>
                          <td> <button><img src=".\assets\img\delete.png"> </button></td>
                          ';
                          $no++;
                      }
                    }
                    ?>
                  </tbody>
                </table>
                <button onclick="javascript:window.location.reload();" ><img src=".\assets\img\refresh.png"> </button>
              </div>
                    </div>
                  </div>
            </div>
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                  <h2 class="card-title">Eliminar música </h2>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Cantidad</span>
                      </div>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Precio</span>
                      </div>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="form-group">
                    <label for="mostrar-precio">Cubre silla</label>
                    <select class="form-control" id="mostrar-precio">
                          <option value="1">Sí</option>
                          <option value="0">No</option>
                    </select>
                  </div>
                  <div class="input-group input-group-sm mb-3">
                      <div class="input-group-prepend" id="priceshow">
                        <span class="input-group-text" id="priceshow">Precio</span>
                      </div>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
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
