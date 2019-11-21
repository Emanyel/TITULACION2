$(document).ready(function(){
//PBTENEMOS EL ID PARA PODER HACER LAS ACTUALIZACIONES EN LA BD
    id = getParameterByName("id");
    console.log(id);

    $("button").removeClass("cancelarData");
    var total=0;

    $(".direccion").prop("disabled", true);
    $(".fecha").prop("disabled", true);
    $(".evento").prop("disabled", true);

    $('.nombreCliente').prop("disabled",true);
    $('.apellido').prop("disabled", true);
    $(".numeroContacto").prop('disabled', true);
    $('.correo').prop("disabled", true);
    
    $(document).on('click', '.editarDelantera', function(){
        Swal.fire({
            title: 'Quieres editar?',
            text: "Si quieres editar la info del cliente da click!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero editar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                limpiarDelantera();
                $(".direccion").prop("disabled", false);
                $(".fecha").prop("disabled", false);
                $(".evento").prop("disabled", false);
            }
        })
        
    });

    $(document).on('click', '.cancelarDelantera', function(){
        Swal.fire({
            title: 'Estas seguro?',
            text: "Ningun cambio sera guardado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                $(".direccion").prop("disabled", true);
                $(".fecha").prop("disabled", true);
                $(".evento").prop("disabled", true);
            }
        })
        
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

    $(document).on("click",".clienteData",function(){
        
        Swal.fire({
            title: 'Quieres editar?',
            text: "Si quieres editar la info del cliente da click!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero editar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                $('.nombreCliente').prop("disabled",false);
                $('.apellido').prop("disabled", false);
                $(".numeroContacto").prop('disabled', false);
                $('.correo').prop("disabled", false);
                limpiar();
                $(this).removeClass( "clienteData" );
                $(this).addClass("editarCliente");
                $("#cancel").addClass("cancelarData");
                
            }
        })
    });

    $(document).on("click", ".editarCliente", function(){
        var cliente = $(".nombreCliente").val();
        var apellido =  $(".apellido").val();
        var contacto = $(".numeroContacto").val();
        var correo = $(".correo").val();
        
        if(cliente== "" || apellido == "" || contacto == "" || correo == "" ){
            Swal.fire({
                type: 'error',
                text: 'Llena todos los campos',
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            })
        }else{
            clientes = {"id": id, "cliente": cliente, "apellidos": apellido, "telefono": contacto, "correo": correo};
            $.ajax({
                url: '../php/clientes.php',
                type: 'POST',
                data: clientes
            }).done(function(respuesta){
                if(respuesta.estado == "ok"){

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })

                    $('.nombreCliente').prop("disabled",true);
                    $('.apellido').prop("disabled", true);
                    $(".numeroContacto").prop('disabled', true);
                    $('.correo').prop("disabled", true);
                }
            });
        }
    
  
    });

    $(document).on("click", ".cancelarData", function(){
        Swal.fire({
            title: 'Estas seguro?',
            text: "No se guardara ningun cambio",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                $('.nombreCliente').prop("disabled",true);
                $('.apellido').prop("disabled", true);
                $(".numeroContacto").prop('disabled', true);
                $('.correo').prop("disabled", true);
            }
        })
    });

    $()

    function cargarCliente(){


        $.ajax({
            url:'../php/cargarEdicion.php',
            type:'GET',
            data : ids
        }).done(function(respuesta){
            if(respuesta == 'ok'){

            }

        });
    }

    //OBTENER ID DE URL
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function limpiar(){
        $(".nombreCliente").val("");
        $(".apellido").val("");
        $(".numeroContacto").val("");
        $(".correo").val("");
        
    }

    function limpiarDelantera(){
        $(".direccion").val("");
        $(".fecha").val("");
        $(".evento").val("");

    }


});
