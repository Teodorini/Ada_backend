// Declara dos variables booleanas condicion1 y condicion2. Pide al 
// usuario que ingrese dos valores booleanos (true o false) y muestra el 
// resultado de diversas combinaciones lógicas.

const prompt = require('prompt-sync')();

let condicion1 = prompt("Ingresa la primera condición (true/false): ") === `true`;
let condicion2 = prompt("Ingresa la segunda condición (true/false): ") === `true`;

console.log(`Condicion 1 AND condicion 2:  ${condicion1 && condicion2}`);
console.log(`Condicion 1 OR condicion 2:  ${condicion1 || condicion2}`);
