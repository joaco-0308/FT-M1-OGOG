'use strict';

function BinarioADecimal(num) {
   let numDecimal = 0;
   let numBinario = num.split("").reverse(); //(split:convertimos en un arreglo de digitos)(reverse: invertimos)

   for(let i = 0; i < numBinario.length; i++){
      numDecimal += numBinario[i] * 2 ** i;
   }
   return numDecimal;
}

function DecimalABinario(num) {
let Binario = [];

while(num > 0){
   let resto = num % 2
   Binario.push(resto);
   num = Math.floor(num / 2);
}
return Binario.reverse().join("");
}
DecimalABinario(16)

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
