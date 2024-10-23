// Ejercicio 2: Clases Abstractas - Sistema de Vehículos 
// Crea una clase abstracta Vehiculo con una propiedad velocidad y un método 
// abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa 
// los modificadores de acceso para controlar la visibilidad de las propiedades

abstract class Vehiculo {
    protected velocidad: number;

    constructor(velocidad: number) {
        this.velocidad = velocidad
    }
    abstract mover(): void;

    acelerar(): void {
        this.velocidad += 10;
        console.log(`Acelera a ${this.velocidad} Km/h`);
        
    }
    
}

class Auto extends Vehiculo {
    mover(): void {
        console.log(`El auto se mueve por carretera`);
        
    }
}

class Bicicleta extends Vehiculo {
    mover(): void {
        console.log(`La bici se mueve por ciclovia`);
        
    }
}

const auto = new Auto(60);
auto.mover();
auto.acelerar();

const bici = new Bicicleta(10);
bici.mover();
bici.acelerar();