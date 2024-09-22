// Ejercicio 9: 
// Define una constante PI con el valor de pi (3.14159). Pide al usuario 
// que ingrese el radio de un círculo y calcula su área y perímetro 
// utilizando la constante PI.

const prompt = require("prompt-sync")();

const pi = 3.14159;

const radio = parseFloat(prompt("Ingrese el radio deseado: "));

//calcular diametro 

let diametro = (radio*2); {
} 
//calcular perimetro

let perimetro = (diametro * pi); {
    console.log(`El Perimetro es: ${perimetro}`);
} 
//Calcular Area

let area = pi * (radio * radio); {
    console.log(`El Area es: ${area}`);
}

