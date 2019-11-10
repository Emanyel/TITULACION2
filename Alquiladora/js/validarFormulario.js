var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var telefono = document.getElementById('telefono');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensaje');
var btnEnviar = document.getElementById('enviar');

btnEnviar.onclick = function validar(){
    if( nombre.value === "" || correo.value === "" || telefono.value === "" || asunto.value === "" || mensaje.value === ""){
        alert("Debes llenar todos los campos");
    }else{
        console.log(nombre.value,correo.value,telefono.value);
    }
}