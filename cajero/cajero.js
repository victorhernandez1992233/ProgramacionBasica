class billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;

    }
}

function entregarDinero(){
    var t = document.getElementById("dinerito");
    dinerito = parseInt(t.value);
    for (var bi of caja){
        if (dinerito > 0){
            div = Math.floor(dinerito / bi.valor);
            if (div > bi.cantidad){
                papeles = bi.cantidad
            }
            else{
                papeles = div;
            }

            entregado.push(new billete(bi.valor, papeles));
            dinerito = dinerito -(bi.valor * papeles);
        }
    }
    if (dinerito > 0){
        reusltado.innerHTML ="soy un cajero sin dinero";
        
    }
    else{
        for(var e of entregado){
            reusltado.innerHTML = reusltado.innerHTML + e.cantidad + " billetes de $" + e.valor+ "</br>";
        }
   
    }
    console.log(entregado);
}

var caja = [];
var entregado = [];
caja.push( new billete(50, 3) );
caja.push( new billete(20, 2) );
caja.push( new billete(10, 2) );

var dinero = 0;
var div = 0;
var papeles = 0;

var reusltado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);