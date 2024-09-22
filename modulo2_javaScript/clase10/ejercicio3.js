// Ejercicio 3: While 
// Crea un programa que solicite al usuario ingresar números 
// continuamente hasta que el usuario ingrese un número negativo. 
// Luego, imprime la suma de todos los números ingresados.

const prompt = require("prompt-sync")();
let numeros = parseInt(prompt("Ingrese un numero negativo: "));
let suma = 0;


while (numeros >= 0) {
    suma += numeros
    
    numeros = parseInt(prompt("Intentelo nuevamente! ingrese un numero negativo: "))
}
let total = suma
console.log(`La suma total de los numeros ingresados es de: ${total}`);
