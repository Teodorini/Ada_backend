"use strict";
class Animal {
    constructor(nombre, tipoAlimento, especie) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }
    //Metodo publico (accesible desde cualquier parte)
    describirAnimal() {
        console.log(`${this.nombre}, un animal de la especie ${this.especie}`);
    }
    // Metodo privado(dentro de la clase)
    mostrarTipoAlimento() {
        console.log(`${this.nombre}, se alimenta de: ${this.tipoAlimento}`);
    }
    // Metodo protegido (accesible dentro y en herencia)
    sonidoAnimal() {
        console.log(`${this.nombre}, hace un sonido.`);
    }
    // Metodo para acceder al privado dentro de la class
    alimentarAnimal() {
        this.mostrarTipoAlimento(); // llamo al metodo privado dentro de la class
    }
}
// Crear una instancia de la class animal
const miAnimal = new Animal(`Gato`, `croquetas`, `Felino`);
miAnimal.describirAnimal();
miAnimal.alimentarAnimal();
