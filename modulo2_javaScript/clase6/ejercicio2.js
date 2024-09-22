/*	Ejercicio 2 - Comparación de Tres Números: Escribe un programa que pida al usuario tres números y determine cuál es el mayor.
Muestra el número mayor en la consola.
Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras.*/

const prompt = require("prompt-sync")();

// Numeros ingresados por el usuario

let primerNumero = parseFloat(prompt("Ingrese su primer numero: "));
let segundoNumero = parseFloat(prompt("Ingrese su segundo numero: "));
let tercerNumero = parseFloat(prompt("Ingrese su tercer numero: "));

// Determinar cual es el mayor
if (primerNumero > segundoNumero) {
    console.log(("El numero mayor es: ") + primerNumero);
} else if (segundoNumero >  tercerNumero) {
    console.log(("El numero mayor es: ") + segundoNumero);
} else{
    console.log(("El numero mayor es: ") + tercerNumero);
}





