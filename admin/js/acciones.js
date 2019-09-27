$(function(){
var tarjeta = 
"<div class='container p-3'>"+
"<button class='btn btn-success' id ='boton' onclick='eliminar();'>Eliminar</button>"
"<button class='btn btn-success' id ='boton' onclick='editar();'>Editar</button>"
+"</div>"
				+"</div>"
					+"<div class='tarjeta-wrap' style='float: left;'>"
						+"<div class='tarjeta'>"
								+"<div class='adelante card1'>"
										+"<div class='card-block' >"
											+"<img src='../img/1.jpg' class='card-img-top' alt='ilustracion' style=' height: 8rem; width: fill;'>"
											+"<div class='card-body'>"
												+"h5 class='card-title' id='eventos'>Nombre del Evento </h5>"
												+"h6 class='card-subtitle mb-2 text-muted'> $$ Precio</h6>"
												+"p class='card-text' id='lugar'>Lugar:</p>"
												+"p class='card-text' id='hora'>Hora: </p>"
											+"</div>"
										+"</div>"
									+"<div class='card-footer'>"
										+"small class='text-muted'>Last updated 3 mins ago</small>"
									+"</div>"
								+"</div> <!-- FIN DE ADELANTE -->"
									+"<div class='atras'>"
										+"<div class='card-block'>"
												+"<div class='card-body'>"
													+"<h4 class='card-title' id='eventoAtras'>Nombre del evento</h5>"
													+"<p class='card-text' id='solicitante'>Nombre del solicitante</p>"
													+"<p class='card-text' id='noEmpleados'>Empleados</p>"
													+"<p class='card-text' id='recursos'>Mesas y sillas</p>"
													+"<p class='card-text' id='entretenimiento'>Entretenimiento</p>"
													+"<p class='card-text' id='musica'>Musica</p>"
													+"<p class='card-text' id='extras'>Extras</p>"
												+"</div>"
										+"</div>"
									+"</div>"
						+"</div>" 
                    +"</div>";

    $(".button1").click(function(){
        $(".contCard").replaceWith("<h2>tarjeta</h2>");
    });
});