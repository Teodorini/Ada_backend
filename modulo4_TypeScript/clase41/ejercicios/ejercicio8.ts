// Ejercicio 8: Integramos contenidos - Animales 
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
// Animal, Mascota, y MascotaExotica. 
// o La clase Animal debe tener propiedades como nombre y tipo. 
// o La clase Mascota debe extender Animal e incluir una propiedad para 
// dueño. 
// o La clase MascotaExotica debe extender Animal e incluir una 
// propiedad para habitat. 
// 2. Implementa métodos para mostrar información sobre cada tipo de animal 
// y agrega ejemplos de instanciación. 
class Animales {
    public nombre: string;
    public tipo: string;
    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
        
    }
}
class Mascotas extends Animales {
    public dueño: string;
    constructor(nombre: string, tipo: string, dueño: string) {
        super(nombre, tipo) //llama al constructor de la clase Animal
        this.dueño = dueño;
    }
    public mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Dueño: ${this.dueño}`);
        
    }
}
class MascotaExotica extends Animales {
    public habitat: string;
    constructor(nombre: string, tipo: string, habitat: string) {
        super(nombre, tipo)
        this.habitat = habitat;
    }
    public mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Habitat: ${this.habitat}`);
        
    }
}

const perro = new Mascotas("Gloria", "Perro", "Mariana");
const leon = new MascotaExotica("Leon", "Felino", "selva");
perro.mostrarInformacion();
leon.mostrarInformacion();

