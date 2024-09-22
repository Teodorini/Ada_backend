// • Ejercicio 2: 
// Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” 
// es devuelto como “http://www.pepito.com”

const prompt = require("prompt-sync")();

let textoString = prompt("Ingrese un texto: ");

function convierte() {

    return "http://wwww." + textoString + ".com";
    
}
console.log(convierte());