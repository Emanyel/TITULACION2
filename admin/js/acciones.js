$(document).ready(function(){
	$('input[name=direccion]').prop("disabled",true);
	$('input[name="fecha"]').prop("disabled", true);
	$('input[name="evento"]').prop("disabled", true);

		// CONTAMOS CUANTOS ITEM EXISTEN (TARJETAS)
	var items =  document.getElementsByClassName("item").length;

		//ACCCION PARA EL BOTON EDITAR
	$(document).on('click', '.button1', function(){
		window.open('../html/edicion.html', '_blank');
	});
		//ACCCION PARA EL BOTON ELIMINAR
	$(document).on('click', '.button2', function(){
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
				borrarEvento();
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
			'<form id="form" action="../php/agregarEvento.php" method="GET">'+
			'<div class="form-group"><input type="text" id="datepicker" placeholder="Select date" required/></div>'+
			'<div class="form-group"><input name="evento" placeholder="Escribe el nombre del evento" required/></div>'+
			'<div class="form-group"><input name="direccion" placeholder="Escribe la dirección" required/></div>'+
			'<button type="submit" class="aceptar" id="boton">Aceptar</button>'+
			'</form>'+
			'<button class="cancelar" id="boton">Cancelar</button>'+
			'</div>'+
			'<script>$("#datepicker").datepicker({ minDate: 0 });</script>');
		}else{
			$('.inicio').replaceWith('<div class="entradas">'+
			'<h4>Parte delantera de la tarjeta</h4>'+
			'<form id="form" action="../php/agregarEvento.php" method="GET">'+
			'<div class="form-group"><input type="text" id="datepicker" placeholder="Select date" required/></div>'+
			'<div class="form-group"><input name="evento" placeholder="Escribe el nombre del evento" required/></div>'+
			'<div class="form-group"><input name="direccion" placeholder="Escribe la dirección" required/></div>'+
			'<button type="submit" class="aceptar" id="boton">Aceptar</button>'+
			'</form>'+
			'<button class="cancelar" id="boton">Cancelar</button>'+
			'</div>'+
			'<script>$("#datepicker").datepicker({ minDate: 0 });</script>');
		}

				
	});
		//ACCION PARA ACEPTAR LA INFO DEL NUEVO EVENTO
	$(document).on('click', '.aceptar', function(){
		 
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

	function borrarEvento(){
		
	}

});
