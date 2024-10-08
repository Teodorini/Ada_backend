"use strict";
// Ejercicio 12: Uso de tuplas para almacenar información personal
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
// 2. Inicializa la tupla con los valores "Juan", 30, "Argentina".
exports.persona = ["juan", 30, "Argentina"];
// 3. Cambia el país de origen a "Brasil" y muestra por consola la tupla
// actualizada.
exports.persona[2] = "Brasil";
console.log(exports.persona);
// 4. Desestructura la tupla para obtener el nombre y la edad, y muestra esos
// valores por consola.
let [nombre, edad] = exports.persona;
console.log(nombre);
console.log(edad);
