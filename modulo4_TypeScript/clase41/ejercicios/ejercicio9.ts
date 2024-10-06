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
    public marca: string;
    public modelo: string;
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarInfoVehiculo(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
        
    }
}
export class Coche extends Vehiculo {
    tipoCombustible: string;
    constructor(marca: string, modelo: string, tipoCombustible: string) {
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }
    mostrarInfoVehiculo(): void {
        super.mostrarInfoVehiculo();
        console.log(`Combustible: ${this.tipoCombustible}`);
        
    }
}
class Motocicleta extends Vehiculo {
    cilindrada: number;
    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }
    public mostrarInfoVehiculo(): void {
        super.mostrarInfoVehiculo();
        console.log(`Cilindrada: ${this.cilindrada} CC`);

    }
}
const auto = new Coche("Volkswagen", "Gol trend", "Nafta");
const moto = new Motocicleta("Honda", "xxl", 50);
auto.mostrarInfoVehiculo();
moto.mostrarInfoVehiculo();