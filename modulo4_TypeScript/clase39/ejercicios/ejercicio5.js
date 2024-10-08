"use strict";
// jercicio 5: Función con parámetros rest
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad 
// indefinida de números y devuelva su suma. Luego, llama a la función con varios 
// números y muestra el resultado en la consola
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultado = void 0;
function sumarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
;
exports.resultado = sumarTodos(10, 20, 30, 40, 50);
console.log(exports.resultado);
