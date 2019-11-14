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

let sumaTotal = document.getElementById('sumaTotal');

let btnCalcular = document.getElementById('btnCalcular').onclick = function(){
    let resultadoSillas = (parseInt(cantidadRedondo.value)*40) + (parseInt(cantidadRectangular.value)*30) + (parseInt(cantidadSillas.value)*2);
    let resultadoLosa = (parseInt(cantidadHondo.value)*3) + (parseInt(cantidadPlaton.value)*3) + (parseInt(cantidadVaso.value)*3) + (parseInt(cantidadCuchara.value)*1.5) + (parseInt(cantidadTenedor.value)*1.5) + (parseInt(cantidadCuchillo.value)*1.5);
    let resultadoEntre = (parseInt(brincolin.value)*55) + (parseInt(inflable.value)*45);
    let resultadoMusica = (parseInt(mariachi.value)*3500) + (parseInt(norteño.value)*4500) + (parseInt(dj.value)*1000);

    let total = resultadoSillas + resultadoLosa + resultadoEntre + resultadoMusica;
    sumaTotal.innerHTML = "$ " + total;
    
}