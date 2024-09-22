// Ejercicio 3: 
// Crear una función que recibe un string y devuelve la misma frase pero con 
// admiración. 

const prompt = require("prompt-sync")();

let frase = prompt("Ingrese una frase: ");

function admiración(frase) {
    return frase + "!!"
}
console.log(admiración(frase));
