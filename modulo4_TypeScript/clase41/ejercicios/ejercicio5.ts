// Ejercicio 5: Interfaz
// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
// método presentarse().
interface Ipersona {
    nombre: string,
    edad: number
    presentarse(): void;
}
// 2. Crea una clase llamada Persona que implemente esta interfaz y
// proporciona la implementación del método presentarse().
class Persona implements Ipersona {
    constructor(public nombre: string, public edad: number){}
    public presentarse(): void {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
        
    }
}
const Juan = new Persona("Juan", 62);
Juan.presentarse();