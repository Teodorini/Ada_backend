"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
// Inicializando la tupla con nombre y edad
exports.persona = ["Ana", 25];
// Accediendo a los elementos de la tupla
console.log("Nombre:", exports.persona[0]); // Imprime "Ana"
console.log("Edad:", exports.persona[1]); // Imprime 25
// Modificando la tupla
exports.persona[1] = 26;
console.log("Edad actualizada:", exports.persona[1]); // Imprime 26
// Desestructurando la tupla
let [nombre, edad] = exports.persona;
console.log(`La persona se llama ${nombre} y tiene ${edad} años.`);
