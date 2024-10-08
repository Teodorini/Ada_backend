"use strict";
// Definición de un enum numérico
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 0] = "Rojo";
    Colores[Colores["Verde"] = 1] = "Verde";
    Colores[Colores["Azul"] = 2] = "Azul";
})(Colores || (Colores = {}));
// Acceder a los valores del enum
let colorFavorito = Colores.Verde;
console.log('Color favorito (por número):', colorFavorito); // Imprime el índice
// Acceder al nombre del valor por su índice
console.log('Nombre del color por índice:', Colores[colorFavorito]); // Imprime "Verde"
// Definición de un enum de cadenas
var Direcciones;
(function (Direcciones) {
    Direcciones["Norte"] = "N";
    Direcciones["Sur"] = "S";
    Direcciones["Este"] = "E";
    Direcciones["Oeste"] = "O";
})(Direcciones || (Direcciones = {}));
// Asignar un valor del enum a una variable
let direccionViaje = Direcciones.Norte;
console.log('Dirección del viaje:', direccionViaje); // Imprime "N"
