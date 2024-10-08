"use strict";
// Ejercicio 7: Modificadores de Acceso 
// 1. Define una clase Coche con propiedades marca, modelo (públicas) y 
// precio (privada). 
// 2. Implementa un método para mostrar la información del coche que acceda 
// a las propiedades públicas y no a la privada directamente. 
class Coche {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    mostrarInfo() {
        console.log(`Coche marca: ${this.marca} modelo: ${this.modelo} Precio: Consultar`);
    }
}
const fiat = new Coche("Fiat", "Cronos", 1400000);
fiat.mostrarInfo();
