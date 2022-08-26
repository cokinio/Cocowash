// El programa calcula el costo de lavar distintas prendas en la lavanderia incluyendo el costo de envio

//Defino las Clases
class Remera{
    constructor(talle, color){
        this.id=1;
        this.descripcion="remera";
        this.precio=250;
        this.talle=talle;
        this.color=color;
    }
}

class Pantalon{
    constructor(talle, color){
        this.id=2;
        this.descripcion="pantalon";
        this.precio=500;
        this.talle=talle;
        this.color=color;
    }
}

class Buzo{
    constructor(talle, color){
        this.id=3;
        this.descripcion="buzo";
        this.precio=450;
        this.talle=talle;
        this.color=color;
    }
}

class Cliente{

    constructor(nombre,apellido,carrito){
        this.nombre=nombre;
        this.apellido=apellido;
        this.carrito=carrito;
    }

}

// const carrito = [
//     {id:1, descripcion:"remera", precio:250, talle:"s", color:"rojo"},
//     {id:1, descripcion:"remera", precio:250, talle:"l", color:"blanco"},
//     {id:2, descripcion:"pantalon", precio:500, talle:"m", color:"negro"},
//     {id:3, descripcion:"buzo", precio:700, talle:"s", color:"violeta"},
//     {id:2, descripcion:"pantalon", precio:500, talle:"m", color:"azul"},
// ];


// Defino las Funciones
function esPantalon(prenda) {
    return prenda.descripcion === 'pantalon';
}

function esRemera(prenda) {
    return prenda.descripcion === 'remera';
}

function esBuzo(prenda) {
    return prenda.descripcion === 'buzo';
}

function funTotal (carrito) {
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    return total;
}

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let carrito = [];
const cliente1 = new Cliente(nombre,apellido,carrito);

/////////////////////// consulto por el pedido ///////////////////////////

//consulto por remeras
cantRemeras= parseInt(prompt("Ingrese la cantidad de remeras que desea lavar"));

for (i=0; i<cantRemeras; i++){
    talle=prompt("Ingrese el talle de la remera. puede ser s, m o l")
    while (talle!="s" && talle!="m" && talle!="l"){
        talle=prompt("Parametro incorrecto, ingrese nuevamente el talle de la remera. puede ser s, m o l")
    }
    color=prompt("Ingrese el color de la remera")
    const remera1 = new Remera(talle,color);
    cliente1.carrito.push(remera1);
}

//consulto por pantalones
cantPantalones= parseInt(prompt("Ingrese la cantidad de pantalones que desea lavar"));

for (i=0; i<cantPantalones; i++){
    talle=prompt("Ingrese el talle del pantalon. puede ser s, m o l")
    while (talle!="s" && talle!="m" && talle!="l"){
        talle=prompt("Parametro incorrecto, ingrese nuevamente el talle del pantalon. puede ser s, m o l")
    }
    color=prompt("Ingrese el color del pantalon")
    const pantalon1 = new Pantalon(talle,color);
    cliente1.carrito.push(pantalon1);
}

//consulto por Buzos
cantBuzos= parseInt(prompt("Ingrese la cantidad de buzos que desea lavar"));

for (i=0; i<cantBuzos; i++){
    talle=prompt("Ingrese el talle del buzo remera. puede ser s, m o l")
    while (talle!="s" && talle!="m" && talle!="l"){
        talle=prompt("Parametro incorrecto, ingrese nuevamente el talle de la remera. puede ser s, m o l")
    }
    color=prompt("Ingrese el color del buzo")
    const buzo1 = new Buzo(talle,color);
    cliente1.carrito.push(buzo1);
}

console.log(cliente1)


let arrPantalon = cliente1.carrito.filter(esPantalon);
let arrRemera =cliente1.carrito.filter(esRemera);
let arrBuzo =cliente1.carrito.filter(esBuzo);

let mensaje= "el cliente "+ cliente1.nombre +" "+ cliente1.apellido+ " desea lavar ";
let mensaje1= arrRemera.length + " remeras de colores ";

if (arrRemera.length==1){
    mensaje1 =mensaje1 + arrRemera[0].color;
}
else{
    for (i=0; i<arrRemera.length ; i++){
        mensaje1 =mensaje1 + arrRemera[i].color + ", ";
    }
}

let mensaje2= arrPantalon.length + " pantalones de colores ";


if (arrPantalon.length==1){
    mensaje2 =mensaje2 + arrPantalon[0].color;
}
else{
    for (i=0; i<arrPantalon.length ; i++){
        mensaje2 =mensaje2 + arrPantalon[i].color + ", ";
    }
}

let mensaje3= arrBuzo.length + " buzos de colores ";


if (arrBuzo.length==1){
    mensaje3 =mensaje3 + arrBuzo[0].color;
}
else{
    for (i=0; i<arrBuzo.length ; i++){
        mensaje3 =mensaje3 + arrBuzo[i].color + ", ";
    }
}

let mensaje4=" por un total de "+funTotal(carrito); 

let texto = mensaje + mensaje1 + mensaje2 + mensaje3+mensaje4;
console.log( texto );
