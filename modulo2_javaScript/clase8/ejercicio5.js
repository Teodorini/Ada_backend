// Ejercicio 5:
// Escribe un programa que pida al usuario que ingrese tres números y 
// determine cuál es el mayor de los tres.

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Ingrese primer número: "));
let num2 = parseInt(prompt("Ingrese segundo número: "));
let num3 = parseInt(prompt("Ingrese tercer número: "));

if (num1 > num2 && num1 > num3) {
    console.log(`El número mayor es: ${num1}` );
} else if (num2 > num1 && num2 > num3){
    console.log(`El número mayor es; ${num2}`);

} else if (num3 > num1 && num3 > num2){
    console.log(`El número mayor es: ${num3}`);
}else console.log("Los números son iguales");

