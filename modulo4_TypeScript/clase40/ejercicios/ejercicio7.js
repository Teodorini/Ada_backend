"use strict";
// Ejercicio 7: Array de tuplas para almacenar productos
// 1. Crea un array de tuplas donde cada tupla almacene el nombre de un
// producto (string), la cantidad disponible (número) y el precio por unidad
// (número).
let productos = [
    ["Detergente", 100, 1.5],
    ["Lavandina", 200, 1.1],
    ["Cera", 1300, 2.5]
];
// 2. Añade tres productos al array con la siguiente información: "Manzana", 10,
// 1.5; "Pan", 20, 2.0; "Leche", 5, 1.2.
productos.push(["Manzana", 10, 1.5]);
productos.push(["Pan", 20, 2.0]);
productos.push(["Leche", 5, 1.2]);
// 3. Imprime la información del segundo producto.
console.log(productos[1]);
// Modificar la cantidad del tercer producto
productos[2][1] = 10;
console.log(productos);
// Modificar la cantidad de lavandina
productos[1][1] = 100;
console.log(productos);
