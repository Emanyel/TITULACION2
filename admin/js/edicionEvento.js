$(document).ready(function(){
var total=0;
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
        //CALCULAMOS LA CANTIDAD DE SILLAS UTILIZADAS
        mesasN = contador1*10;
        total = total+mesasN;
        console.log("total" + total);
        document.getElementsByClassName('total').innerHTML = total;
        console.log(mesasN);

    });
    $(document).on('click', '#quitarMesas', function(){
        document.getElementById('mesas').value = --contador1;
        //CALCULAMOS LA CANTIDAD DE SILLAS UTILIZADAS
        mesasN = contador1*10;
        total = total+mesasN;
        document.getElementsByClassName('total').innerHTML = total;
        console.log(mesasN);
        console.log(total);
    });

        $(".mesas").change(function(){
            var vals = $(this).val();
            sillasNum = vals * 10;
            total = total+ vals;
            document.getElementsByClassName('total').innerHTML = total;
            console.log(mesasNum);
            console.log(total);
        });

        $(".sillas").change(function(){
            var vals = $(this).val();
            console.log(vals);
        });
    $(document).on('click', '.inflable', function(){
        total = total+350;
        console.log(total);
        document.getElementsByClassName('total').innerHTML = total;
    });
    $(document).on('click', '.brincolin', function () {
        total = total+450;
        console.log(total);
        document.getElementsByClassName('total').innerHTML = total;
      });

      
      

    $(document).on('click', '.enviarEdicion', function(e){
        e.preventDefault();
       var cliente = document.getElementsByClassName('nombreCliente').value;
       var apellido= document.getElementsByClassName('apellido').value;
       var telefono = document.getElementsByClassName('numeroContacto').value;
       var correo = document.getElementsByClassName('correo').value ;
       var mesas = document.getElementsByClassName('mesas').value;
       var extras = document.getElementsByClassName('sillas').value;
       //OBTENEMOS EL ID PARA HACER LA CONSULTA EN PHP
       var id= sessionStorage.getItem("idEvento");
       var datos;
       if($('input[name=direccion]').prop('disabled') && $('input[name="fecha"]').prop('disabled') && $('input[name="evento"]').prop('disabled')){
            datos = {"cliente":cliente, "apellidos": apellido, "telefono":telefono, "correo":correo, "mesas":mesas, "extras":extras, "id":id};
                $.ajax({
                    url: "../php/edicionEvento.php",
                    type:"POST",
                    data: datos
                    }).done(function(respuesta){
                        if(respuesta == "ok"){
                            Swal.fire({
                                type: 'success',
                                title: 'Los cambios se han guardado satisfactoriamente',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }else{
                            Swal.fire({
                                type: 'error',
                                title: 'Algo salió mal, inténtalo mas tarde',
                                showConfirmButton: true,
                                confirmButtonText: "Ok"
                            })
                            console.log("En if");

                        }
                    });    
        }else{
            var nombreEvento = document.getElementsByClassName('evento').value;
            var direccion = document.getElementsByClassName('direccion').value;
            var fechaEvento = document.getElementsByClassName('fecha').value;
        
            datos = {"cliente":cliente, "apellidos":apellido, "telefono":telefono, "correo": correo, "evento": nombreEvento, "direccion":direccion, "fecha":fechaEvento, "mesas":mesas, "extras":extras, "id":id}
            $.ajax({
                url: "../php/edicionEvento.php",
                type:"POST",
                data: datos
            }).done(function(respuesta){
                if(respuesta == "ok"){
                    Swal.fire({
                        type: 'success',
                        title: 'Los cambios se han guardado satisfactoriamente',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }else{
                    Swal.fire({
                        type: 'error',
                        title: 'Algo salió mal, inténtalo mas tarde',
                        showConfirmButton: true,
                        confirmButtonText: "Ok"
                    })
                    console.log("En else");
                }
            });   
        }
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
