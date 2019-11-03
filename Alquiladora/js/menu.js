let boton = document.getElementById('boton-resp');

boton.onclick = function(){

let b = document.getElementsByClassName('anc');

    for(var i=0; i<b.length; i++){
        b[i].classList.toggle('desaparece');
}

}



