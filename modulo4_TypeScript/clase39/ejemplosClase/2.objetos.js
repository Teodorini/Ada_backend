"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libro = void 0;
// definicion basica de un objeto
let gato = {
    color: "naranja",
    nombre: "Arturo",
    anios: 1
};
// mostrar las propiedades del objeto en consola
console.log(`Color: ${gato.color}, Nombre: ${gato.nombre}, Edad: ${gato.anios}`);
// Declaracion explicita del tipo de dato
exports.libro = {
    titulo: "Cien anios de soledad",
    autor: "Garcia Marquez",
    paginas: 500
};
console.log(`Titulo: ${exports.libro.titulo}, Autor: ${exports.libro.autor}, paginas: ${exports.libro.paginas}`);
// 3. propiedades opcionales
let estudiantes = {
    nombre: "Ana"
};
// Mostrar las propiedades del objeto consola
console.log(`Nombre: ${estudiantes.nombre}, Edad: ${estudiantes.edad}}`);
// 4. Metodo en un objeto
let perro = {
    nombre: "Gloria",
    raza: "pitbull",
    ladrar: function () {
        return `${perro.nombre} está ladrando `;
    }
};
console.log(perro.ladrar());
