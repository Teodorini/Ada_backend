// Ejercicio 2: Verificar estado de vacunación 
// Solicita al usuario el nombre de su mascota y si está vacunada. Usa una 
// función flecha para verificar y mostrar su estado de vacunación.

const prompt = require("prompt-sync")();

const nombre = prompt("Ingrese el nombre de su mascota: ");
const vacuna = prompt("Tiene las vacunas al día? si/no: ");

let vacunación = (nombre, vacuna) => {
    vacuna === "si"  ? console.log("Su mascota esta vacunada") : "" 
    vacuna === "no" ?  console.log("Su mascota no esta vacunada") : ""
}
(vacunación(nombre, vacuna));