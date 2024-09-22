// Ejercicio 7: 
// Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
// libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
// kg a libras, Pista: 2.20462)

const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Ingrese su peso: "));

let conversionAlibras = peso * 2.20462;

let resultado = conversionAlibras;
console.log(resultado + " Libras");
