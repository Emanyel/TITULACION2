
(function ($) {
    "use strict";

    $(document).on('click', '.login', function(){
       
        var nombre = document.getElementById('nombre').value;
        var password = document.getElementById('password').value;
        

        if(nombre == '' || password == ''){
            Swal.fire({
                type: 'error',
                text: 'Llena los campos vacios',
                showConfirmButton: true,
                confirmButtonText: 'Ok'
            })
        }else{
            if(nombre == 'admin' && password == '123456'){
                window.location.href = "../inventario/index.html";

            }else{
                Swal.fire({
                    type: 'error',
                    text: 'Usuario y/o contrasena incorrectos',
                    showConfirmButton: true,
                    confirmButtonText: 'Ok'
                })
            }
        }

    });

})(jQuery);