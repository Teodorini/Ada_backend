"use strict";
// Ejercicio 8: Integramos contenidos - Animales 
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
// Animal, Mascota, y MascotaExotica. 
// o La clase Animal debe tener propiedades como nombre y tipo. 
// o La clase Mascota debe extender Animal e incluir una propiedad para 
// dueño. 
// o La clase MascotaExotica debe extender Animal e incluir una 
// propiedad para habitat. 
// 2. Implementa métodos para mostrar información sobre cada tipo de animal 
// y agrega ejemplos de instanciación. 
class Animales {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
    }
}
class Mascotas extends Animales {
    constructor(nombre, tipo, dueño) {
        super(nombre, tipo); //llama al constructor de la clase Animal
        this.dueño = dueño;
    }
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Dueño: ${this.dueño}`);
    }
}
class MascotaExotica extends Animales {
    constructor(nombre, tipo, habitat) {
        super(nombre, tipo);
        this.habitat = habitat;
    }
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Habitat: ${this.habitat}`);
    }
}
const perro = new Mascotas("Gloria", "Perro", "Mariana");
const leon = new MascotaExotica("Leon", "Felino", "selva");
perro.mostrarInformacion();
leon.mostrarInformacion();
