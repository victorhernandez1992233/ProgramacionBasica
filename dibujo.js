

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorClick)

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujoPorClick(boton){
    var x = parseInt(texto.value);
    var lineas = x;
    var contador = 0;
    var yi, xf;
    var nfx, nfy;



while(contador < lineas){
    yi = espacio * contador;
    xf = espacio * (contador+1);
    nfx = 300-xf;
    nfy = 300-yi;
    var espacio = ancho / lineas;

    
    dibujarlinea("grey", 300, yi, xf, 0);
    dibujarlinea("grey", 0, yi, xf, 300);
    dibujarlinea("grey", yi, 300, 300, nfx);
    dibujarlinea("grey", yi, 0, 0, nfy);
    // console.log("linea "+ contador);
    contador = contador + 1;
}
}

dibujarlinea("#AFA", 1, 1, 1, 300);
dibujarlinea("#AFA", 1, 300, 300, 300);
dibujarlinea("#AFA", 299, 1, 1, 1);
dibujarlinea("#AFA", 299, 299, 299, 1);



function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
} 

