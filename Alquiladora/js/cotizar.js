//Sillas y mesas
let cantidadRedondo = document.getElementById('cantidadRedondo');
let cantidadRectangular = document.getElementById('cantidadRectangular');
let cantidadSillas = document.getElementById('cantidadSillas');

//Losa
let cantidadHondo = document.getElementById('cantidadHondo');
let cantidadPlaton = document.getElementById('cantidadPlaton');
let cantidadVaso = document.getElementById('cantidadVaso');
let cantidadCuchara = document.getElementById('cantidadCuchara');
let cantidadTenedor = document.getElementById('cantidadTenedor');
let cantidadCuchillo = document.getElementById('cantidadCuchillo');

//Entretenimiento
let brincolin = document.getElementById('brincolin');
let inflable = document.getElementById('inflable');

//Música
let mariachi = document.getElementById('mariachi');
let norteño = document.getElementById('norteño');
let dj = document.getElementById('dj');

//Lona y salón
let lona = document.getElementById('lona');
let salon = document.getElementById('salon');

let sumaTotal = document.getElementById('sumaTotal');

//Evento onclick en el Botón Calcular
let btnCalcular = document.getElementById('btnCalcular').onclick = function () {

    //Validación Sillas y Mesas
    if (Number.isNaN(cantidadRedondo.valueAsNumber)) {
        cantidadRedondo.value = 0;
    }
    if (Number.isNaN(cantidadRectangular.valueAsNumber)) {
        cantidadRectangular.value = 0;
    }
    if (Number.isNaN(cantidadSillas.valueAsNumber)) {
        cantidadSillas.value = 0;
    }

    //Validación Losa
    if (Number.isNaN(cantidadHondo.valueAsNumber)) {
        cantidadHondo.value = 0;
    }
    if (Number.isNaN(cantidadPlaton.valueAsNumber)) {
        cantidadPlaton.value = 0;
    }
    if (Number.isNaN(cantidadVaso.valueAsNumber)) {
        cantidadVaso.value = 0;
    }
    if (Number.isNaN(cantidadCuchara.valueAsNumber)) {
        cantidadCuchara.value = 0;
    }
    if (Number.isNaN(cantidadTenedor.valueAsNumber)) {
        cantidadTenedor.value = 0;
    }
    if (Number.isNaN(cantidadCuchillo.valueAsNumber)) {
        cantidadCuchillo.value = 0;
    }

    //Validación Checkbox Entretenimiento
    if(brincolin.checked === true){
        var valorBrincolin = 450;
    }else{
        var valorBrincolin = 0;
    }

    if(inflable.checked === true){
        var valorInflable = 350;
    }else{
        var valorInflable = 0;
    }

    //Validación Música
    if (Number.isNaN(mariachi.valueAsNumber)) {
        mariachi.value = 0;
    }
    if (Number.isNaN(norteño.valueAsNumber)) {
        norteño.value = 0;
    }
    if (Number.isNaN(dj.valueAsNumber)) {
        dj.value = 0;
    }

    //Validación Lona y Salón
    if(lona.checked === true){
        var valorLona = 3500;
    }else{
        var valorLona = 0;
    }

    if(salon.checked === true){
        var valorSalon = 10000;
    }else{
        var valorSalon = 0;
    }

    //Suma de los valores de cada sección
    let resultadoSillas = (parseInt(cantidadRedondo.value) * 40) + (parseInt(cantidadRectangular.value) * 30) + (parseInt(cantidadSillas.value) * 2);
    let resultadoLosa = (parseInt(cantidadHondo.value)*3) + (parseInt(cantidadPlaton.value)*3) + (parseInt(cantidadVaso.value)*3) + (parseInt(cantidadCuchara.value)*1.5) + (parseInt(cantidadTenedor.value)*1.5) + (parseInt(cantidadCuchillo.value)*1.5);
    let resultadoEntre = (valorBrincolin + valorInflable);
    let resultadoMusica = (parseInt(mariachi.value)*3500) + (parseInt(norteño.value)*4500) + (parseInt(dj.value)*1000);

    let total = (resultadoSillas + resultadoLosa + resultadoEntre + resultadoMusica + valorLona + valorSalon);
    sumaTotal.innerHTML = "$ " + total + " MXM";
}