$(function(){
	$(".button1").click(function(){
		Swal.fire({
			title: 'Estas seguro?',
			text: "Para poder editar la tarjeta se necesita abrir una nueva ventana Quieres abrirla?",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
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

	});

});