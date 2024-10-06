// Definimos la clase
class gato {
    //propiedades
    public nombre : string;
    public edad: number;
    private raza: string;

    //Constructor. Inicializa el objeto creado a partir de una clase.
    constructor(nombre: string, edad: number, raza: string){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    // Metodo para obtener info del gatito
    public obtenerInfo(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`
    }

    // Metodo para cambiar la raza 
public cambiarRaza(nuevaRaza: string): void{
    this.raza = nuevaRaza;
}
}
// Creamos una instancia de la clase gato
const gato1 = new gato("Miau", 2, "siames");

// llamar al metodo obtenerInfo
console.log(gato1.obtenerInfo());

// cambiar raza
gato1.cambiarRaza("Persa");

//Llamar de nuevo al metodo obtetenerInfo
console.log(gato1.obtenerInfo());

