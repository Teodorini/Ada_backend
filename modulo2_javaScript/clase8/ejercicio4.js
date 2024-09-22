// Ejercicio 4: 
// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

let nombreUsuario =(prompt("Ingrese su nombre: "));
let miNombre ="mariana";

if (nombreUsuario == miNombre || nombreUsuario == "Mariana" || nombreUsuario == "MARIANA") {
    console.log("Hola tocaya! ");
}else console.log("Quien te juna? ");