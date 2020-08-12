var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png"; 


var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", cargarFondo);



var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", cargarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);


var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollos);


function dibujar(){
    papel.drawImage(fondo, 0, 0);
}

function dibujarVacas(){
    papel.drawImage(vaca, 10, 10);
}

function dibujarPollos(){
    papel.drawImage(pollo, 300, 150);
}

function dibujarCerdos(){
    papel.drawImage(cerdo, 10, 300);
}
// var z;
// for(var i =0; i<10; i++){
//     z = aleatorio(10, 20);
//     document.write(z + ", ");
// }


function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min +1)) + min;
    return resultado;
}