$(document).ready(function(){
    $('input[name=direccion]').prop("disabled",true);
	$('input[name="fecha"]').prop("disabled", true);
    $('input[name="evento"]').prop("disabled", true);
    

    $(document).on('click', '#editarDelantera', function(){

        $('input[name=direccion]').prop("disabled", false);
        $('input[name="fecha"]').prop("disabled", false);
        $('input[name="evento"]').prop("disabled", false);
    });

    $(document).on('click', '#cancelarDelantera', function(){

        $('input[name=direccion]').prop("disabled", true);
        $('input[name="fecha"]').prop("disabled", true);
        $('input[name="evento"]').prop("disabled", true);
    });
    
    var contador = 0;
    $(document).on('click', '#agregarSillas', function(){
        document.getElementById('sillas').value = ++contador;
    });
    $(document).on('click', '#quitarSillas', function(){
        document.getElementById('sillas').value = --contador;
    });

    var contador1 = 0
    $(document).on('click', '#agregarMesas', function(){
        document.getElementById('mesas').value = ++contador1;
    });
    $(document).on('click', '#quitarMesas', function(){
        document.getElementById('mesas').value = --contador1;
    });

    var formulario = document.getElementsByClassName('.form');
    $(document).on('submit', '.form', function(e){
        e.preventDefault();
        var datos = ($(this).serializeArray());
        
        fetch('edicion.php',{
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    });
    
    
    $(document).on('click', '.cancelarEdicion', function(e){
        e.preventDefault();
        Swal.fire({
            title: 'Estas seguro?',
            text: "Ningún cambio se guardará!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, hazlo!',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
            if (result.value) {
               
                    window.close();
                
            }
        })
        
    });
});