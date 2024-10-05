// Ejercicio 12: Uso de tuplas para almacenar información personal

// 1. Crea una tupla para almacenar el nombre (string), la edad (número) y el
// país de origen (string) de una persona.
export let persona: [string, number, string];

// 2. Inicializa la tupla con los valores "Juan", 30, "Argentina".
persona = ["juan", 30, "Argentina"];

// 3. Cambia el país de origen a "Brasil" y muestra por consola la tupla
// actualizada.
persona[2] = "Brasil";
console.log(persona);

// 4. Desestructura la tupla para obtener el nombre y la edad, y muestra esos
// valores por consola.
let [nombre, edad] = persona
console.log(nombre);
console.log(edad);

