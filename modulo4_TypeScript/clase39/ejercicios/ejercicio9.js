"use strict";
// Ejercicio 9: Funciones con retorno void y manipulación de objetos
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y 
// encendido (booleano). Define una función encenderCoche que acepte el objeto 
// coche y cambie el valor de encendido a true. Muestra el estado del coche en la 
// consola antes y después de llamar a la función
let coche = {
    marca: "Volkswagen",
    modelo: "Gol Tend",
    encendido: false
};
function encenderCoche(coche) {
    coche.encendido = true;
}
;
console.log("Antes de encender:");
console.log(`El coche ${coche.marca}, Modelo ${coche.modelo}, está encendido?: ${coche.encendido}`);
encenderCoche(coche);
console.log("Despues de encender:");
console.log(`El coche ${coche.marca}, Modelo ${coche.modelo}, está encendido?: ${coche.encendido}`);
