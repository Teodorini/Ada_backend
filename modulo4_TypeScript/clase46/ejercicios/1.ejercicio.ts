// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real 
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método 
// preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción 
// para que ambas bebidas oculten su lógica de preparación interna pero 
// expongan un comportamiento común.

export interface Bebida {
    preparar():void;
}

export class Cafe implements Bebida{
    preparar(): void {
        console.log("Poner tres cucharadas de café en un taza y agregar agua");
        
    }
    
}
export class Te implements Bebida {
    preparar(): void {
        console.log("Poner agua hirviendo en una taza con un saquito de té");
        
    }
}

const cafe = new Cafe;
const te = new Te;

cafe.preparar();
te.preparar();