"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = void 0;
// jercicio 9: Sistema de Gestión de Vehículos 
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases: 
// o Vehiculo: Clase base con propiedades como marca, modelo y un 
// método para mostrar información del vehículo. 
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para 
// tipoCombustible y un método para mostrar la información completa 
// del coche. 
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad 
// para cilindrada y un método para mostrar la información completa 
// de la motocicleta. 
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarInfoVehiculo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo, tipoCombustible) {
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }
    mostrarInfoVehiculo() {
        super.mostrarInfoVehiculo();
        console.log(`Combustible: ${this.tipoCombustible}`);
    }
}
exports.Coche = Coche;
class Motocicleta extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }
    mostrarInfoVehiculo() {
        super.mostrarInfoVehiculo();
        console.log(`Cilindrada: ${this.cilindrada} CC`);
    }
}
const auto = new Coche("Volkswagen", "Gol trend", "Nafta");
const moto = new Motocicleta("Honda", "xxl", 50);
auto.mostrarInfoVehiculo();
moto.mostrarInfoVehiculo();
