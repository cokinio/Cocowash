// El programa calcula el costo de lavar distintas prendas en la lavanderia incluyendo el costo de envio


let cantRemeras=0;
let cantPantalones=0;
let cantBuzos=0;
let cantMedias=0;
let cantCalzoncillos=0;
let cantShorts=0;
let cantToallas=0;


for (i=0; i<=6; i++){

    if (i===0){
        cantRemeras= parseInt(prompt("Ingrese la cantidad de remeras que desea lavar"));
    }
    if (i===1){
        cantPantalones= parseInt(prompt("Ingrese la cantidad de pantalones que desea lavar"));
    }
    if (i===2){
        cantBuzos= parseInt(prompt("Ingrese la cantidad de buzos que desea lavar"));
    }
    if (i===3){
        cantMedias= parseInt(prompt("Ingrese la cantidad de medias que desea lavar"));
    }
    if (i===4){
        cantCalzoncillos= parseInt(prompt("Ingrese la cantidad de calzoncillos que desea lavar"));
    }
    if (i===5){
        cantShorts= parseInt(prompt("Ingrese la cantidad de shorts que desea lavar"));
    }
    if (i===6){
        cantToallas= parseInt(prompt("Ingrese la cantidad de toallas que desea lavar"));
    }

}

let envio = parseInt(prompt('Si desea que le enviemos el pedido a su casa ingrese 1, de lo contrario ingrese 0'));

let total = calculoTotal(cantRemeras, cantPantalones, cantBuzos, cantMedias, cantCalzoncillos, cantShorts, cantToallas)
if (envio===1){
    total=total+250;
}

alert("el costo total de su lavado es de "+ total);
console.log(`el costo total de su lavado es de ${total}`);
function calculoTotal (cantRemeras, cantPantalones, cantBuzos, cantMedias, cantCalzoncillos, cantShorts, cantToallas){

    let totRemeras= cantRemeras*50;
    let totPantalones=cantPantalones*120;
    let totBuzos=cantBuzos*90;
    let totMedias=cantMedias*25;
    let totCalzoncillos= cantCalzoncillos*60;
    let totShorts= cantShorts*75;
    let totToallas= cantToallas*160;

    let total= totRemeras+totPantalones+totBuzos+totMedias+totCalzoncillos+totShorts+totToallas;
    return total;
}