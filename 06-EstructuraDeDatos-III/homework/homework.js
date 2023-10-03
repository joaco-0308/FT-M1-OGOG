"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
   hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
      return value;
    }
  } else {
    if (this.right) {
      return this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
      return value;
    }
  }
};

BinarySearchTree.prototype.size = function () {
   if(!this.left && !this.right) return 1;

   if(this.left && !this.right) return this.left.size() +1;

   if(!this.left && this.right) return this.right.size() +1;

   else return (this.left.size() + this.right.size() +1);
};

BinarySearchTree.prototype.contains = function (value) {
if(this.value === value) return true;

if(value < this.value){
   if(this.left && this.left.value === value){
      return true;
   }else if(this.left){
      return this.left.contains(value);
   }
}else{
   if(this.right && this.right.value === value){
      return true;
   }else if(this.right){
      return this.right.contains(value);
   }
}
return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, arg) {
   switch(arg){
      case "post-order":
          if(this.left) this.left.depthFirstForEach(cb, arg);
          if(this.right) this.right.depthFirstForEach(cb, arg);
          cb(this.value);
          break;
      case "pre-order":
         cb(this.value);
         if(this.left) this.left.depthFirstForEach(cb, arg);
         if(this.right) this.right.depthFirstForEach(cb, arg);
         break;
      default:
         if(this.left) this.left.depthFirstForEach(cb, arg);
         cb(this.value);
         if(this.right) this.right.depthFirstForEach(cb, arg);
         break;
   }
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
if(this.left != null) array.push(this.left);

if(this.right != null) array.push(this.right);

cb(this.value);

if(array.length > 0) return array.shift().breadthFirstForEach(cb, array);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
