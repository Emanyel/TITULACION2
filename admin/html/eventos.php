<?php
//include 'conexion.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<script src="../js/acciones.js"></script>
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Eventos</title>
</head>
<body>
		<div class="wrap">
			<div class="container p-4" style="display: flex;">
				<div>
					<div class="tarjeta-wrap" style="float: left;" onclick="contador();" id="tarjeta-wrap">
						<div class="tarjeta">
								<div class="adelante card1">
										<div class="card-block" >
											<img src="../img/1.jpg" class="card-img-top" alt="..." style=" height: 8rem; width: fill;">
											<div class="card-body">
												<h5 class="card-title" id="evento">Nombre del Evento </h5>
												<h6 class="card-subtitle mb-2 text-muted"> $$ Precio</h6>
												<p class="card-text" id="lugar">Lugar:</p>
												<p class="card-text" id="hora">Hora: </p>
											</div>
										</div>
									<div class="card-footer">
										<small class="text-muted">Last updated 3 mins ago</small>
									</div>
								</div> <!-- FIN DE ADELANTE -->
									<div class="atras">
										<div class="card-block">
												<div class="card-body">
													<h4 class="card-title" id="eventoAtras">Nombre del evento</h5>
													<p class="card-text" id="solicitante">Nombre del solicitante</p>
													<p class="card-text" id="noEmpleados">Empleados</p>
													<p class="card-text" id="recursos">Mesas y sillas</p>
													<p class="card-text" id="entretenimiento">Entretenimiento</p>
													<p class="card-text" id="musica">Musica</p>
													<p class="card-text" id="extras">Extras</p>
												</div>
										</div>
									</div><!-- fin de atras-->
						</div> <!-- fin de tarjeta -->
					</div> <!-- fin de tarjeta wrap -->

					<div class="botones">
					<button class="btn btn-success" onclick="eliminar();">Eliminar</button>
					<button class="btn btn-success" onclick="editar();">Editar</button>
					</div>

				</div>
					<div class="tarjeta-wrap" style="float: left;">
						<div class="tarjeta">
								<div class="adelante card1">
										<div class="card-block" >
											<img src="../img/1.jpg" class="card-img-top" alt="..." style=" height: 8rem; width: fill;">
											<div class="card-body">
												<h5 class="card-title" id="evento">Nombre del Evento </h5>
												<h6 class="card-subtitle mb-2 text-muted"> $$ Precio</h6>
												<p class="card-text" id="lugar">Lugar:</p>
												<p class="card-text" id="hora">Hora: </p>
											</div>
										</div>
									<div class="card-footer">
										<small class="text-muted">Last updated 3 mins ago</small>
									</div>
								</div> <!-- FIN DE ADELANTE -->
									<div class="atras">
										<div class="card-block">
												<div class="card-body">
													<h4 class="card-title" id="eventoAtras">Nombre del evento</h5>
													<p class="card-text" id="solicitante">Nombre del solicitante</p>
													<p class="card-text" id="noEmpleados">Empleados</p>
													<p class="card-text" id="recursos">Mesas y sillas</p>
													<p class="card-text" id="entretenimiento">Entretenimiento</p>
													<p class="card-text" id="musica">Musica</p>
													<p class="card-text" id="extras">Extras</p>
												</div>
										</div>
									</div><!-- fin de atras-->
						</div> <!-- fin de tarjeta -->
					</div> <!-- fin de tarjeta wrap -->

					<div class="tarjeta-wrap" style="float: left;">
						<div class="tarjeta">
								<div class="adelante card1">
										<div class="card-block" >
											<img src="../img/1.jpg" class="card-img-top" alt="..." style=" height: 8rem; width: fill;">
											<div class="card-body">
												<h5 class="card-title" id="evento">Nombre del Evento </h5>
												<h6 class="card-subtitle mb-2 text-muted"> $$ Precio</h6>
												<p class="card-text" id="lugar">Lugar:</p>
												<p class="card-text" id="hora">Hora: </p>
											</div>
										</div>
									<div class="card-footer">
										<small class="text-muted">Last updated 3 mins ago</small>
									</div>
								</div> <!-- FIN DE ADELANTE -->
									<div class="atras">
										<div class="card-block">
												<div class="card-body">
													<h4 class="card-title" id="eventoAtras">Nombre del evento</h5>
													<p class="card-text" id="solicitante">Nombre del solicitante</p>
													<p class="card-text" id="noEmpleados">Empleados</p>
													<p class="card-text" id="recursos">Mesas y sillas</p>
													<p class="card-text" id="entretenimiento">Entretenimiento</p>
													<p class="card-text" id="musica">Musica</p>
													<p class="card-text" id="extras">Extras</p>
												</div>
										</div>
									</div><!-- fin de atras-->
						</div> <!-- fin de tarjeta -->
					</div> <!-- fin de tarjeta wrap -->


			</div> <!-- FIN DE CONTENEDOR FLEX -->
		</div> <!-- FIN DE WRAP -->
</body>
</html>