// Objetivo: Crear un objeto JSON simple y mostrarlo en la consola.
// Instrucciones:
// 1. Crea un archivo llamado exercise1.js.
// 2. Define un objeto JSON que represente a una persona (incluye 
// campos como nombre, edad, y email).
// 3. Convierte el objeto JSON a una cadena y muéstralo en la consola.


const person = {
    name: "Juan",
    age: 62,
    email: "juan.teodorini@gmail.com",
    address: {
        street: "Necochea 2339",
        city: "Ramos Mejia, Buenos Aires",
        country: "Argentina"
    }
};
// convertir el objeto JSON a cadena 
const personString = JSON.stringify(person, null, 2);

console.log(personString);
