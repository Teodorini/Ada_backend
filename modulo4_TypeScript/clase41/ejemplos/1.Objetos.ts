// definicion de una interface

interface Estudiante {
    nombre: string;
    edad: number;
    materiaFavorita: string;
    promedio: number;

    saludar: () => void //metodo saludar que no devuelve valor
    obtenerDetalles: () => string // Metodo q devuelve una cadena de texto con detalles del alumno
}

//creacion de un objeto que cumple con la interfaz de estudiante
export const estudiante1: Estudiante = {
    nombre: "Mariana",
    edad: 21,
    materiaFavorita: "Lengua",
    promedio: 9.5,

    // Implementacion del metodo saludar
    saludar: function() {
        console.log(`Hola soy ${estudiante1.nombre}, tengo ${estudiante1.edad}, anios y mi materia favorita es ${estudiante1.materiaFavorita}. Mi promedio es: ${estudiante1.promedio}`);
        
    },

    // Implementacion del metodo obtenerDetalles
    obtenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}, Edad: ${estudiante1.edad}, Materia favorita: ${estudiante1.materiaFavorita}`
    }
};

// Uso del metodo saludar
estudiante1.saludar();

// Uso del metodo obtener detalles
const detalles = estudiante1.obtenerDetalles();
console.log(detalles);
