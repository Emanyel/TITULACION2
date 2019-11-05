$(document).ready(function(){
	$('input[name=direccion]').prop("disabled",true);
	$('input[name="fecha"]').prop("disabled", true);
	$('input[name="evento"]').prop("disabled", true);
	numItem = "";
	var items = [{}];

		// CONTAMOS CUANTOS ITEM EXISTEN (TARJETAS)
	var items =  document.getElementsByClassName('princ').length;
	console.log(items);

		//ACCCION PARA EL BOTON EDITAR
	$(document).on('click', '.button1', function(){
		window.open('../html/edicion.html', '_blank');
	});
		//ACCCION PARA EL BOTON ELIMINAR
	$(document).on('click', '.button2', function(){
		var class1 = this.id;
		console.log(class1);
		Swal.fire({
			type:'warning',
			title: 'Estas seguro?',
			text: 'Si eliminas un evento no podras deshacer esta acción.',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, hazlo!'
		  }).then((result) => {
			if (result.value) {
			  Swal.fire(
				'Borrado!',
				'El evento ha sido borrado',
				'success'
			  )
			}
		})

	});
		//ACCION PARA EL BOTON CREAR UN NUEVO EVENTO
	$(document).on('click', '.newEvent', function(){
		if(items != 0){
			$('.nuevoEvento').replaceWith('<div class="entradas">'+
			'<h4>Parte delantera de la tarjeta</h4>'+

			'<div class="form-group"><input type="date" class="fecha" id="datepicker" placeholder="Select date" required/></div>'+
			'<div class="form-group"><input class="evento" placeholder="Escribe el nombre del evento" required/></div>'+
			'<button  class="aceptar" id="boton">Aceptar</button>'+
			'<button class="cancelar" id="boton">Cancelar</button>'+
			'</div>');
		}else{
			$('.inicio').replaceWith('<div class="entradas">'+
			'<h4>Parte delantera de la tarjeta</h4>'+
			'<div class="form-group"><input type="date" class="fecha"  placeholder="Selecciona la fecha" required/></div>'+
			'<div class="form-group"><input class="evento" placeholder="Escribe el nombre del evento" required/></div>'+
			'<button  class="aceptar" id="boton">Aceptar</button>'+
			'<button class="cancelar" id="boton">Cancelar</button>'+
			'</div>');
		}

				
	});
		//ACCION PARA ACEPTAR LA INFO DEL NUEVO EVENTO
	$(document).on('click', '.aceptar', function(e){
		e.preventDefault();
		var nombreEvento = $(".evento").val();
		var fecha = $(".fecha").val();
		if(nombreEvento != "" && fecha != ""){
			datos = {"nombreEvento":nombreEvento, "fecha":fecha};
			Swal.fire({
				type:'warning',
				title: 'Estas seguro?',
				text: 'Se creará un nuevo evento',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: 'Cancelar',
				confirmButtonText: 'Si, hazlo!'
			  }).then((result) => {
				if (result.value) {
					$.ajax({
						url: "../php/agregarEvento.php",
						type: "GET",
						data: datos
					}).done(function(respuesta){
						if (respuesta.estado === "ok") {
							numItem = respuesta.id;
							evento = respuesta.nombreEvento;
							lugar = respuesta.fecha;
							nuevaTarjeta(numItem, evento, lugar);
							Swal.fire({
								type: 'success',
								title: 'Has creado un evento nuevo',
								showConfirmButton: true,
								confirmButtonText: "Ok"
							  })
							console.log(JSON.stringify(respuesta));
						}else{
							Swal.fire({
								type: 'error',
								text: 'No puedes agregar mas de 3 eventos en un dia',
								showConfirmButton: true,
								confirmButtonText: 'Ok'
							});
						}
					});
				
				}
			})
		}else{
			Swal.fire({
				type: 'warning',
				title: 'Llena todos los campos',
				showConfirmButton: true,
				confirmButtonText: "Ok"
			  })
		}
	});
		//ACCION PARA DECLINAR LA INFO DEL NUEVO EVENTO
	$(document).on('click', '.cancelar', function(){
		Swal.fire({
			type:'warning',
			title: 'Estas seguro?',
			text: 'No se guardará ningun dato ingresado',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, hazlo!'
		  }).then((result) => {
			if (result.value) {
				agregarButtonEvento();
			  Swal.fire(
				'Hecho!',
				'Aqui no pasó nada',
				'success'
			  )
			}
		})
	});

	$(document).on('click', '.enviarEdicion', function(){
	});

	$(document).on('click', '.cancelEdicion', function () {
		Swal.fire({
			type:'warning',
			title: 'Estas seguro?',
			text: 'No se guardará ningun dato ingresado',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, hazlo!'
		  }).then((result) => {
			if (result.value) {
			  window.close();
			}
		})
	});
	
	//FUNCIONES DE AYUDA
	function agregarButtonEvento(){
		if(items != 0){
			$(".entradas").replaceWith("<div class='nuevoEvento'><button id='boton' class='newEvent'>Agregar evento</button></div>");
			
		}else{
			$(".entradas").replaceWith(
				"<div class='container p-4 inicio' > <p>Aqui es donde se mostrarán todos tus eventos."+
				" Para agregar un nuevo evento da click en el boton y llena los campos correspondientes</p>"+
				"<div class='container p-4 nuevoEvento'>"+
					"<button class='newEvent' id='boton'>Agregar evento</button>"+
				"</div>"+
				"</div>"
			);
		}

	}
	function nuevaTarjeta(numItem, evento, lugar){
		//GUARDAMOS EL ID EN UNA SESION DEL NAVEGADOR
		sessionStorage.setItem("idEvento", numItem);
		if(items != 0){
			$(".entradas").replaceWith("<div class= 'item"+numItem+" princ'>"+
			'<div class="tarjeta-wrap" style="float: left;"  id="tarjeta-wrap">'+
				'<div class="tarjeta" id="tarjeta">'+
						'<div class="adelante card1">'+
								'<div class="card-block" >'+
									'<img src="../img/1.jpg" class="card-img-top" alt="..." style=" height: 8rem; width: fill;">'+
									'<div class="card-body">'+
										'<h5 class="card-title" id="evento">'+evento+'</h5>'+
										'<h6 class="card-subtitle mb-2 text-muted" id="precio"> $$ Precio</h6>'+
										'<p class="card-text" id="lugar">Lugar:</p>'+
										'<p class="card-text" id="hora">Hora y fecha: '+lugar+'</p>'+
									'</div>'+
								'</div>'+
							'<div class="card-footer">'+
								'<small class="text-muted">Last updated 3 mins ago</small>'+
							'</div>'+
						'</div> <!-- FIN DE ADELANTE -->'+
							'<div class="atras">'+
								'<div class="card-block">'+
										'<div class="card-body">'+
											'<h4 class="card-title" id="eventoAtras">'+evento+'</h5>'+
											'<p class="card-text" id="solicitante">Nombre del solicitante</p>'+
											'<p class="card-text" id="noEmpleados">Empleados</p>'+
											'<p class="card-text" id="recursos">Mesas y sillas</p>'+
											'<p class="card-text" id="entretenimiento">Entretenimiento</p>'+
											'<p class="card-text" id="musica">Musica</p>'+
											'<p class="card-text" id="extras">Extras</p>'+
										'</div>'+
								'</div>'+
							'</div><!-- fin de atras-->'+
				'</div> <!-- fin de tarjeta -->'+
			'</div> <!-- fin de tarjeta wrap -->'+
			'<div class="container p-3" id="buttons">'+
				'<button name="age"  data-toggle="modal" data-target="#add_data_Modal" class="button1 boton'+numItem+'" id="boton">Editar</button>'+
				'<button class="button2 boton '+numItem+'" id ="boton" >Eliminar</button>'+
			'</div>'+
		'</div>'+
		'<div class="nuevoEvento">'+
				'<button class="btn btn-success newEvent" id="boton">Agregar evento</button>'+
		'</div>');

		}else{
			if(items == 0){
				$(".entradas").replaceWith(
					'<div class="container p-4" style="display: flex;" id="primerDiv">'+
					"<div class= 'item "+numItem+" princ'>"+
				'<div class="tarjeta-wrap" style="float: left;"  id="tarjeta-wrap">'+
					'<div class="tarjeta" id="tarjeta">'+
							'<div class="adelante card1">'+
									'<div class="card-block" >'+
										'<img src="../img/1.jpg" class="card-img-top" alt="..." style=" height: 8rem; width: fill;">'+
										'<div class="card-body">'+
											'<h5 class="card-title" id="evento">'+evento+'</h5>'+
											'<h6 class="card-subtitle mb-2 text-muted" id="precio"> $$ Precio</h6>'+
											'<p class="card-text" id="lugar">Lugar:'+lugar+'</p>'+
											'<p class="card-text" id="hora">Hora y fecha: '+lugar+'</p>'+
										'</div>'+
									'</div>'+
								'<div class="card-footer">'+
									'<small class="text-muted">Last updated 3 mins ago</small>'+
								'</div>'+
							'</div> <!-- FIN DE ADELANTE -->'+
								'<div class="atras">'+
									'<div class="card-block">'+
											'<div class="card-body">'+
												'<h4 class="card-title" id="eventoAtras">'+evento+'</h5>'+
												'<p class="card-text" id="solicitante">Nombre del solicitante</p>'+
												'<p class="card-text" id="noEmpleados">Empleados</p>'+
												'<p class="card-text" id="recursos">Mesas y sillas</p>'+
												'<p class="card-text" id="entretenimiento">Entretenimiento</p>'+
												'<p class="card-text" id="musica">Musica</p>'+
												'<p class="card-text" id="extras">Extras</p>'+
											'</div>'+
									'</div>'+
								'</div><!-- fin de atras-->'+
					'</div> <!-- fin de tarjeta -->'+
				'</div> <!-- fin de tarjeta wrap -->'+
				'<div class="container p-3" id="buttons">'+
					'<button name="age"  data-toggle="modal" data-target="#add_data_Modal" class="button1" id="boton">Editar</button>'+
					'<button class="button2 "'+numItem+' id ="boton" >Eliminar</button>'+
				'</div>'+
			'</div>'+
			'<div class="nuevoEvento">'+
					'<button class="newEvent" id="boton">Agregar evento</button>'+
			'</div>'+
			'</div>');
			}
		}
		
	}
	function obtenerEventos(){
		$.ajax({
			url: '../obtenerEventos.php',
			type: 'GET'
		}).done(function(respuesta){
			if(respuesta == 'ok'){
				console.log("Eventos cargados");
			}else{
				console.log(respuesta);
			}
		})
	}
	function eliminar(){
		var nombres = document.getElementById('evento');
		console.log(nombres);
		var fechas = document.getElementById('hora');
		var id;
		nombres ={"nombre":nombres, "fecha": fechas};
		$.ajax({
			url: '../php/obtenerItem.php',
			type: 'GET',
			data: nombres
		}).done(function(){
			if(respuesta.estado == "ok"){
				id= respuesta;
			}
		});
	}


});
