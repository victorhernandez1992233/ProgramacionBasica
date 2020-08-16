var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

functionprender()
{
  var led_amarillo = new jf.Led(13);
  var led_azul = new jf.Led(7);
  led_amarillo.blink(200);
  led_azul.blink(700);
}