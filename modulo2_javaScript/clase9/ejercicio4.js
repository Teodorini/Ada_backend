// Ejercicio 4: Ciclo For 
// Nuestra tarea es contar la cantidad de números impares que hay desde 
// el número 0 hasta un número X

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingrese un número a elección: "));
let numImpar = 0;

for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
        numImpar++
    }
    
}
    console.log(`La cantidad de números impares desde 0 hasta ${numero} (inclusive) es: ${numImpar}`);
