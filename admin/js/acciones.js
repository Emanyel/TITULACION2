

$(document).ready(function(){


	$(".button2").click(function(){
        Swal.fire({
			title: 'Estas seguro?',
			text: "Elimina eventos solo cuando ya se hayan realizado, si lo borras no podras deshacer esta accion!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, borrar evento!',
			cancelButtonText: 'Cancelar',
			animation: false,
			customClass: {
				popup: 'animated tada'
			},
		  }).then((result) => {
			if (result.value) {
				borrar();
			  Swal.fire(
				'Hecho!',
				'El evento fue borrado',
				'success'
			  )
			}
		  })


	});

	$(".button1").click(function(){

		Swal.fire({
			title: "Abrir pestana nueva?",
			text: "Para poder editar la parte trasera de la tarjeta se necesita abrir una nueva pestana. Quieres hacerlo?",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, ir a la pestana',
			cancelButtonText: 'Cancelar',

		  }).then((result) => {
				if (result.value) {
					window.open('./edicion.html', '_blank')
				}
		  })
	});

	$("#cancelar").click(function(){
			$("input[type=text]").val('');
			$("input[type=number]").val('');
			$("input[type=date]").val('');
			//REGRESAMOS A LA VISTA INICIAL
			Swal.fire({
				type: 'success',
				title: 'Hecho, los cambios han sido efectuados!',
				showConfirmButton: false,
				timer: 1500
			})
			window.close('./edicion.html', '_blank')

	});

	$("#guardar").click(function(){

	});

	function borrar(){
		$("#item").replaceWith("<div id='item'></div>");
	}

	function validarTarjeta(){

	}


});
