// Ejercicio 10: 
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
// semana correspondiente. Si el número no está dentro de ese rango, 
// muestra un mensaje de error

const prompt = require("prompt-sync")();

let diaDeLaSemana = parseInt(prompt("Ingrese un día de la semana: "));

if (diaDeLaSemana === 1) {
    console.log("Lunes :( ");

} else if (diaDeLaSemana === 2) {
    console.log("Martes :/ ");

} else if (diaDeLaSemana === 3) {
    console.log("Miercoles :| ");

} else if (diaDeLaSemana === 4) {
    console.log("Jueves!");

} else if (diaDeLaSemana === 5) {
    console.log("Viernes, joda, joda, joda!")

} else if (diaDeLaSemana === 6) {
    console.log("Sabadoooo!!");

} else if (diaDeLaSemana === 7) {
    console.log("Domingo!");

} else console.log("Error! ingrese un número de la semana válido ");