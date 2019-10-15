$(document).ready(function(){
	$(".button1").click(function(){
		window.open('../html/edicion.php', '_blank');
	});

	$(".button2").click(function(){
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
				borrar();
			  Swal.fire(
				'Borrado!',
				'El evento ha sido borrado',
				'success'
			  )
			}
		})
	});

	$("#mas").click(function(){
		
	});

	$("#menos").click(function(){

	});

	function borrar(){
		$('')
	}

	$("nuevoEvento").click(function(){
		
	});

});
