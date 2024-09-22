// Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que 
// convierta una temperatura dada en grados Celsius a grados Fahrenheit.
// Pide al usuario que ingrese la temperatura en Celsius y muestra el 
// resultado en Fahrenheit 



const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Ingrese la temperatura en grados celsius: "));
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);





