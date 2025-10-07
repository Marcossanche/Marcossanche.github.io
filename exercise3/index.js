


var encendida = document.getElementById("bombillaencendida");
encendida.onclick = function() {
    document.querySelector("#1").innerHTML = "Bombilla encendida";
    document.getElementById('myImage').src='img/pic_bulbon.gif'
}
    

var apagada = document.getElementById("bombillaapagada");
apagada.onclick = function() {
    document.getElementById("#1").innerHTML = "Bombilla apagada";
    document.getElementById('myImage').src='img/pic_bulboff.gif'
}
