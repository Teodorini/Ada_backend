"use strict";
// jercicio 4: Clases y Objetos
// 1. Define una clase llamada Animal con propiedades nombre y tipo, y un
// método hacerSonido().
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    hacerSonido() {
        console.log(`${this.nombre} está ladrando`);
    }
}
exports.Animal = Animal;
// 2. Crea una instancia de la clase Animal y llama al método.
const perro = new Animal("Gloria", "perro");
perro.hacerSonido();
