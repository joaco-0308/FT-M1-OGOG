function BinarioADecimal(num){
    num = num.split(""); // Split separa la cadena de numeros
    let suma = 0 ; // variable suma con valor 0;

    for(let i = 0; i < num.length; i++){ // recorremos a num separado numero por numero.
        suma += Math.pow(2, num.length-1-i) * num[i]; //De derecaha a izquierda. Elevamos el 2 a la pocision y lo multiplicamos por el numero en el que estamos parados(0 o 1).
    }
    return suma; //devuelvo la suma de todos los binarios que representa al decimal
}

//------------------------------------------------------------------------------------------------------------

function DecimalABinario(num){
    let numBinarios = [];

    while(num !== 0){
        numBinarios.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    return numBinarios.join("");
}