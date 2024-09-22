// • Ejercicio 6: Numero N 
// Hacer un programa que calcule la suma de los N primeros números 
// naturales, dónde N es el número límite ingresado por teclado. 
const prompt = require("prompt-sync")();
let numeroN = parseInt(prompt("Ingrese el numero limite N: "));

let suma = 0;
for (let index = 1; index <= numeroN; index++) {
    suma += index;
}
console.log(suma);