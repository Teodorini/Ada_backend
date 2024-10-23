// jercicio 2: Definición de una interfaz para un objeto simple 
// Define una interfaz para representar una persona con nombre, edad y correo 
// electrónico. Crea una función que imprima esta información.

interface Persona {
    nombre: string,
    edad: number,
    email: string,
}

function imprimir(persona:Persona): void {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`email: ${persona.email}`);
    
}

export const crearPersona: Persona = {
    nombre: "Mariana",
    edad: 43,
    email: "mariana@gmail.com"

};
imprimir(crearPersona);
