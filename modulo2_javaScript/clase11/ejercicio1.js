// • Ejercicio 1:  
// Crear una función que convierta pulgadas en centímetros. Recibe por 
// parámetro pulgadas y retorna su equivalente en centímetros.

const prompt = require("prompt-sync")();
let pulgadas = parseFloat(prompt("Ingrese un valor en pulgadas: "));

function convertidor(pulgadas) {
    return pulgadas * 2.54
}
console.log("El resultado es: " + convertidor(pulgadas) + " CM");
