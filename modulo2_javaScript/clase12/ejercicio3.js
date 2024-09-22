// • Ejercicio 3: Clasificación de edades 
// Solicita al usuario una edad y usa una función flecha para clasificarla en niño, 
// adolescente, adulto o adulto mayor.

const prompt = require("prompt-sync")();
let edades = parseInt(prompt("Ingrese su edad: "));
let clasificarEdades = (edades) => {
    if (edades <= 12) {
        return "Usted es un niño"  
    } else if (edades >= 12 && edades <= 17) {
        return "Usted es adolscente"
    } else if (edades >= 18 && edades <= 69) {
        return "Usted es adulto"
    } else if (edades >= 70) {
        return "Usted es adulto mayor"
    } 
} 
console.log(clasificarEdades(edades));