"use strict";
// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre 
// (string), deporte (string), y energia (number). Luego, define una función entrenar 
// que acepte el objeto deportista y un número de horas de entrenamiento, 
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al 
// final, muestra el estado del deportista en la consola.
let deportista = {
    nombre: "Rafael Nadal",
    deporte: "Tenis",
    energia: 100
};
function entrenar(deportista, horas) {
    const energiaConsumida = horas * 5;
    deportista.energia -= energiaConsumida;
}
entrenar(deportista, 3);
console.log(`Energia restante: ${deportista.energia}`);
