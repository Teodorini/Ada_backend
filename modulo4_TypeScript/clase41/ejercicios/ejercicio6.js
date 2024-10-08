"use strict";
// Ejercicio 6: Uso de this 
// 1. Crea una clase llamada Mariposa con propiedades nombre y color, y un 
// método volar() que use this para referirse a las propiedades de la 
// instancia. 
class Mariposa {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    volar() {
        console.log(`La Mariposa ${this.nombre} de color ${this.color} está volando`);
    }
}
// 2. Crea una instancia de la clase y llama al método.
const azuleta = new Mariposa("Azuleta", "Azul");
azuleta.volar();