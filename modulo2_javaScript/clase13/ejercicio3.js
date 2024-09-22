// • Ejercicio 3: Número secreto 
 // imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe 
// imprimir "Lo siento, ¡intenta nuevamente!"
const prompt = require("prompt-sync")();
// Escribí un programa que piense un número de forma aleatoria del 1 al 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// le pida al usuario que lo trate de adivinar.
const numeroUsuario = parseInt(prompt("Ingrese un numero del 1 al 10: "));

if (numeroUsuario == numeroAleatorio) {
    console.log("Correcto, Adivinaste!! ");
    
} else {
  console.log("Numero incorrecto");
}
 

   






 
