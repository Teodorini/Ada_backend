"use strict";
// 2. Crea una clase llamada Persona que implemente esta interfaz y
// proporciona la implementación del método presentarse().
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
const Juan = new Persona("Juan", 62);
Juan.presentarse();
