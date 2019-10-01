

$(document).ready(function(){

    $("#boton").click(function(){
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
	

	function borrar(){
		$("#Card").replaceWith("<div id='Card'><div class='tarjeta-wrap' style='float: left;'  id='tarjeta-wrap'></div></div>")
	}

	

});