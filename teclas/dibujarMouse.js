var estado = 0;          // estado del click
var colorLinea = "blue";    // color a la linea

var area = document.getElementById('area_de_dibujo');
var papel = area.getContext("2d");

var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse


// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado

    var xFinal = evento.clientX -8;
    var yFinal = evento.clientY - 80;

    dibujarLinea(colorLinea, x, y, xFinal, yFinal, papel);

  }
  x = evento.clientX -8;
  y = evento.clientY - 80;

}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = 2;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}