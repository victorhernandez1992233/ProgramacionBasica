var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";



var coleccion = [];
coleccion.push(new pakiman("Cauchin", 100, 30) );
coleccion.push(new pakiman("pokacho", 80, 50));
coleccion.push(new pakiman("tocinauro", 120, 40));


for(var freddito of coleccion)
{
  freddito.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}