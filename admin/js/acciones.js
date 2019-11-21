$(document).ready(function(){
	cargarEventos();
	$('input[name=direccion]').prop("disabled",true);
	$('input[name="fecha"]').prop("disabled", true);
	$('input[name="evento"]').prop("disabled", true);
	
	//VARIABLES GLOBALES
	numItem = "";
	var elementId;
	var items = [{}];
	eliminar = null;


		//ACCCION PARA EL BOTON EDITAR
	$(document).on('click', '.button1', function(){
		element = $(this).attr("class");
		console.log(element);
		elementId = element.substr(20, element.length-2);
		console.log(elementId);

		var regex = /(\d+)/g;
		var aux1 = elementId.match(regex);
		console.log(aux1);
	
		window.open('../html/edicion.html?id=' + aux1, '_blank');
	});
		//ACCCION PARA EL BOTON ELIMINAR
	$(document).on('click', '.button2', function(){
		//OBTENEMOS EL ID DE LA TARJETA
		element = $(this).attr("class");
		console.log(element);
		elementId = element.substr(17, element.length-2);
		console.log(elementId);
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
				eliminarEvento(elementId);
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
							
							Swal.fire({
								type: 'success',
								title: 'Has creado un evento nuevo',
								showConfirmButton: true,
								confirmButtonText: "Ok"
							  })
							  
							console.log(JSON.stringify(respuesta));
							location.reload();
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
			'<div class="container p-3 cajaBotones" id="buttons">'+
				'<button name="age"  data-toggle="modal" data-target="#add_data_Modal" class="button1 boton'+numItem+'" id="boton">Editar</button>'+
				'<button class="button2 boton '+numItem+'" id ="boton" >Eliminar</button>'+
			'</div>'+
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
				'<div class="container p-3 cajaBotones" id="buttons">'+
					"<button name='age'  data-toggle='modal' data-target='#add_data_Modal' class='button1 botonnumItem'"+numItem+" id='boton'>Editar</button>"+
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
	
	function cargarEventos(){
		$("div").remove(".entradas");
		var princ = document.getElementsByClassName('princ').length;
		
			$.ajax({
				url: '../php/obtenerEventos.php',
				type: 'GET',
			}).done(function(data){
				if(data.length != 2){
					var eventos = JSON.parse(data);
					var aux = Object.keys(eventos).length;
					console.log(aux);
					//REEMPLAZAR BOTON AGREGAR EVENTO
					
					for(var i=0; i< aux; i++){
						console.log(eventos[i].id);
					$(".divP").append(
						"<div class='item"+eventos[i].id+" princ'>"+
								"<div class='tarjeta-wrap' style='float: left;'  id='tarjeta-wrap'>"+
									"<div class='tarjeta' id='tarjeta'>"+
											"<div class='adelante card1'>"+
													"<div class='card-block' >"+
														"<img src='../img/1.jpg' class='card-img-top' alt='...' style=' height: 8rem; width: fill;'/>"+
														"<div class='card-body'>"+
															"<h5 class='card-title' id='evento'>"+eventos[i].nombre_evento +"</h5>"+
															"<h6 class='card-subtitle mb-2 text-muted' id='precio'> $$ Precio</h6>"+
															"<p class='card-text' id='lugar'>Lugar: "+ eventos[i].direccion+"</p>"+
															"<p class='card-text' id='hora'>Hora: "+eventos[i].fecha+"</p>"+
														"</div>"+
													"</div>"+
												"<div class='card-footer'>"+
													"<small class='text-muted'>Last updated 3 mins ago</small>"+
												"</div>"+
								"</div>"+
									"<div class='atras'>"+
										"<div class='card-block'>"+
												"<div class='card-body'>"+
													"<h4 class='card-title' id='eventoAtras'>"+eventos[i].nombre_evento +"</h5>"+
													"<p class='card-text' id='solicitante'>Nombre del solicitante</p>"+
													"<p class='card-text' id='noEmpleados'>Empleados</p>"+
													"<p class='card-text' id='recursos'>"+eventos[i].mesas+"</p>"+
													"<p class='card-text' id='entretenimiento'>Entretenimiento</p>"+
													"<p class='card-text' id='musica'>Musica</p>"+
													"<p class='card-text' id='extras'>Extras</p>"+
												"</div>"+
										"</div>"+
									"</div>"+
						"</div>"+
					"</div>"+
					"<div class='container p-3' id='buttons'>"+
						"<button data-toggle='modal' data-target='#add_data_Modal' class='button1 botonnumItem"+eventos[i].id +"' id='boton'>Editar</button>"+
						"<button class='button2 boton numItem"+eventos[i].id +"' id ='boton' >Eliminar</button>"+
					"</div>"+
					"</div>");
					} //AGREGAR BOTON NUEVO EVENTO
					
					$(".divP").append(
						'<div class="nuevoEvento">'+
							'<button class="btn btn-success newEvent" id="boton">Agregar evento</button>'+
						"</div>"
						);
				}else{
						$('#primerDiv').replaceWith(
							"<div class='container p-4 inicio' > <p>Aqui es donde se mostrarán todos tus eventos."+
								" Para agregar un nuevo evento da click en el boton y llena los campos correspondientes</p>"+
								"<div class='container p-4 nuevoEvento'>"+
									"<button class='newEvent' id='boton'>Agregar evento</button>"+
								"</div>"+
							"</div>");
				}
	
			});
		
		
	}

	function eliminarEvento(elementId){
		var regex = /(\d+)/g;
		var aux = elementId.match(regex);
		console.log(aux);
		var data = {"id":aux.toString()};
		$.ajax({
			url: '../php/eliminarEventos.php',
			type: 'POST',
			data: data
		}).done(function(respuesta){
			if(respuesta.estado === 'ok'){
				 var nuevoEven = document.getElementsByClassName('nuevoEvento').length;
				 console.log(nuevoEven);
				if( nuevoEven != 1){
					$("div.item"+aux.toString()).replaceWith("<div class='nuevoEvento'><button id='boton' class='newEvent'>Agregar evento</button></div>");
				}else{
					$("div.item"+aux.toString()).remove();
					Swal.fire(
						'Borrado!',
						'El evento ha sido borrado',
						'success'
					  )	
				}
					
			}else{
				Swal.fire({
					type: 'error',
					text: 'Algo salio mal, intentalo mas tarde',
					showConfirmButton: true,
					confirmButtonText: 'Ok'
				});
			}
		});
	}

});
