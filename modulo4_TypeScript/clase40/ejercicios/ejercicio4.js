"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frutas = void 0;
// Ejercicio 4: Manipulación de Arrays 
// 1. Crea un array que contenga los nombres de tus 5 frutas favoritas.
exports.frutas = ["Banana", "Manzana", "Frutilla", "Uva", "Naranja"];
// 2. Usa un método para añadir otra fruta al final del array.
exports.frutas.push("Arandanos");
// 3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana") 
// dentro del array.
let indice = exports.frutas.indexOf("Manzana");
console.log(indice);
// 4. Elimina la última fruta y muestra el array actualizado por consola.
exports.frutas.pop();
console.log(exports.frutas);
