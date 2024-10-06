// Ejercicio 10: Registro de Estudiantes 
// 1. Crea un sistema para registrar Estudiantes con las siguientes clases: 
// o Estudiante: Clase que incluye propiedades como nombre, edad y 
// curso, además de un método que muestre la información del 
// estudiante. 
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
// métodos para agregar un estudiante y mostrar todos los estudiantes 
// registrados. 

class Estudiante {
    public nombre: string;
    public edad: number;
    public curso: string;
    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
      }
    
}
class RegistroEstudiantes {
private estudiantes: Estudiante[] = []
    public agregarEstudiante(estudiante: Estudiante) {
        this. estudiantes.push(estudiante)
    }   
    mostrarEstudiante(): void {
        console.log(`Lista de estudiantes: `);
        this.estudiantes.forEach(estudiante => estudiante.mostrarInformacion())
        
    }
    
    }

    const registrar = new RegistroEstudiantes();
    const est1 = new Estudiante("Mariana", 42, "Backend");
    const est2 = new Estudiante("Melisa", 34, "Psicologia");

    registrar.agregarEstudiante(est1);
    registrar.agregarEstudiante(est2);
    registrar.mostrarEstudiante();

    
        
