<<<<<<< HEAD


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

=======
$(function(){
	$(".button1").click(function(){
>>>>>>> 33b34bfab478adf8847c66d8d832786c0208cdb2
		Swal.fire({
			title: 'Estas seguro?',
			text: "Para poder editar la tarjeta se necesita abrir una nueva ventana Quieres abrirla?",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
<<<<<<< HEAD
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
=======
			confirmButtonText: 'Si, hazlo!',
			confirmButtonCancel: 'Cancelar',
			}).then((result) => {
			if (result.value) {
				window.open('./edicionTarjeta.html');
			}
		})
	});

	$(".button2").click(function(){

	});

	$("#mas").click(function(){
		var dato = parseInt(document.getElementById("quantity").text());
		dato = dato++;
		document.getElementById("quantity").innerText = dato;
	});

	$("#menos").click(function(){
>>>>>>> 33b34bfab478adf8847c66d8d832786c0208cdb2

	});

});
