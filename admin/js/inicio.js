$(document).ready(function(){
	// CONTAMOS CUANTOS ITEM EXISTEN (TARJETAS)
	var items =  document.getElementsByClassName("item").length;
	if(items == 0){
	   $('#primerDiv').replaceWith(
	   "<div class='container p-4 inicio' > <p>Aqui es donde se mostrarán todos tus eventos."+
			" Para agregar un nuevo evento da click en el boton y llena los campos correspondientes</p>"+
			"<div class='container p-4 nuevoEvento'>"+
				"<button class='newEvent' id='boton'>Agregar evento</button>"+
			"</div>"+
		"</div>");
    }

});