// • Ejercicio 5: Flores Favoritas 
// Escribe un programa para contar cuántas veces el usuario 
// menciona sus flores favoritas. Utiliza un array para almacenar las flores 
// favoritas y realiza las siguientes acciones: 
// 1. Inicializa un array vacío para almacenar las flores favoritas. 
// 2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
// agrega cada una al array (aquí usa un método de los vistos en Arrays) 
const prompt = require("prompt-sync")();
const floresFavoritas = [];
for (let i = 0; i < 3; i++) {
   
    let flores = prompt("Ingrese sus Flores favoritas: ");
    floresFavoritas.push(flores)
}
// 3. Pregunta al usuario por una flor específica y verifica si está entre sus favoritas

let especifica = prompt("Ingrese una flor para verificar si es favorita: ")
if (floresFavoritas.includes(especifica)){
    console.log(`${especifica} se encuentra entre sus favoritas`);
} else {
    ("No está en la lista")
}
console.log(floresFavoritas);
