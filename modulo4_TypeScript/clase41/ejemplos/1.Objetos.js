"use strict";
// definicion de una interface
Object.defineProperty(exports, "__esModule", { value: true });
exports.estudiante1 = void 0;
//creacion de un objeto que cumple con la interfaz de estudiante
exports.estudiante1 = {
    nombre: "Mariana",
    edad: 21,
    materiaFavorita: "Lengua",
    promedio: 9.5,
    // Implementacion del metodo saludar
    saludar: function () {
        console.log(`Hola soy ${exports.estudiante1.nombre}, tengo ${exports.estudiante1.edad}, anios y mi materia favorita es ${exports.estudiante1.materiaFavorita}. Mi promedio es: ${exports.estudiante1.promedio}`);
    },
    // Implementacion del metodo obtenerDetalles
    obtenerDetalles: function () {
        return `Nombre: ${exports.estudiante1.nombre}, Edad: ${exports.estudiante1.edad}, Materia favorita: ${exports.estudiante1.materiaFavorita}`;
    }
};
// Uso del metodo saludar
exports.estudiante1.saludar();
// Uso del metodo obtener detalles
const detalles = exports.estudiante1.obtenerDetalles();
console.log(detalles);
