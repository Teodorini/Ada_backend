


const prompt = require("prompt-sync")();

let notas = [];
let cantidadDeNotas = parseInt(prompt("ingrese cantidad de notas: "));

for (let i = 0; i < cantidadDeNotas; i++) {
   notas[notas.length] = prompt("Ingrese la nota: ");
    
}


console.log(`Las notas ingresadas son: `, notas);

