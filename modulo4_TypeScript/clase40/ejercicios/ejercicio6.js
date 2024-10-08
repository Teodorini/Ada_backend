"use strict";
// // jercicio 6: Combinando Arrays, Tuplas y Enum
// // 1. Declara un enum llamado Colores con los valores Rojo, Verde, Azul.
var colores;
(function (colores) {
    colores[colores["rojo"] = 0] = "rojo";
    colores[colores["verde"] = 1] = "verde";
    colores[colores["azul"] = 2] = "azul";
})(colores || (colores = {}));
// // 2. Crea un array de tuplas donde cada tupla tenga el nombre de un color
// // (string) y el valor correspondiente del enum.
let arrayDeColores = [
    ["rojo", colores.rojo],
    ["verde", colores.verde],
    ["azul", colores.azul]
];
// // 3. Añade una tupla más con otro color y su valor del enum.
arrayDeColores.push(["amarillo", colores.rojo]);
// // 4. Muestra por consola todo el array de tuplas.
console.log(arrayDeColores);
