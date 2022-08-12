let numero1 = parseFloat(prompt("Ingrese un numero de 0 a 100"));
let numero2 = parseFloat(prompt("Ingrese otro numero de 0 a 100"));
let diferencia = 0;
let menor = 0;

if (numero1<=100 && numero2<=100){
    if (numero1>numero2){
        diferencia=numero1-numero2;
        menor=numero2; 
    }
    else if (numero1<numero2){
        diferencia=numero2-numero1;
        menor=numero1; 
    }
    else{
        diferencia=0;
        menor=numero1;
    }

    alert("Los números que se encuentran comprendidos entre los 2 numeros ingresados serán escritos en la consola: ");

    for (i=0; i<=diferencia; i++){
        valor=menor+i;
        console.log("el numero " + valor + " se encuentra comprendido entre los 2 números ingresados")
    }

}
else{
    alert("Los números ingresados son mayores a 100 ");
}