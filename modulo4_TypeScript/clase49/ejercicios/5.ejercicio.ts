// Ejercicio 5: Uso de polimorfismo con clases
// Crea una clase abstracta FiguraGeometrica que tenga un método abstracto para 
// calcular el área. Luego, implementa dos clases concretas: Cuadrado y Circulo, 
// que hereden de FiguraGeometrica y calculen el área adecuadamente. 



abstract class FiguraGeometrica {
    
    abstract calcularArea(): number;
}

class Cuadrado extends FiguraGeometrica{
    constructor(private lado: number){
        super();
    }
    calcularArea(): number {
        return this.lado ** 2;
    }
}
class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
        super();
    }
    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

const miCuadrado = new Cuadrado(6);
const miCirculo = new Circulo(2);

console.log(miCuadrado.calcularArea());
console.log(miCirculo.calcularArea());

