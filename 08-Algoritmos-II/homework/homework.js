'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array;

  let random = array[0];
  let aux = []
  let left = []
  let right = []

  for(let i = 0; i < array.length; i++){
    if(array[i] !== random){
      if(array[i] < random){
        left.push(array[i]);
      }else{
        right.push(array[i]);
      }
    }else{
      aux.push(array[i]);
    }
  }
  return (quickSort(left)).concat(aux).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array; //Parametro de corte: Si el array tienen menos de dos elementos se devuelve como esta. 

  let mitadArray = Math.floor(array.length / 2);
  let left = array.slice(0, mitadArray);
  let right = array.slice(mitadArray);

  array = []

  left = mergeSort(left);
  right = mergeSort(right);
  
  while(left.length && right.length){
    if(left[0] < right[0]){
       array.push(left.shift());
    }
    else array.push(right.shift());
  }
  array = array.concat(left, right);
  return array; 
  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
