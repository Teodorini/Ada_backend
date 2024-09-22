// Ejercicio 8: 
// Pide al usuario que ingrese las longitudes de los tres lados de un 
// triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
// escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require("prompt-sync")();

let lado1 = parseFloat(prompt("Ingrese la primer medida: "));
let lado2 = parseFloat(prompt("Ingrese la segunda medida: "));
let lado3 = parseFloat(prompt("Ingrese la tercer medida: "));

if (lado1 === lado2 && lado2 === lado3 && lado1 === lado3) {
    console.log("El triangulo es Equilatero");
}else if (lado1 === lado2 && lado1 !== lado3 || lado2 === lado3 && lado2 !== lado1 || lado3 === lado1 && lado3 !== lado2) {
    console.log("El triangulo es Isosceles");
}else console.log("El triangulo es Escaleno");
