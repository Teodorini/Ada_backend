// Crea un módulo shapes.ts que contenga las clases Circle y Square. Cada clase debe 
// tener un constructor que acepte las dimensiones necesarias y un método para 
// calcular el área.

export class Circle {

    constructor(private radio: number) {
    }
calcularArea(): number {
    return Math.PI * this.radio * this.radio;
}
}
export class Square {
    constructor(private side: number) {}
  
    calcularArea(): number {
      return this.side * this.side;
    }
  }