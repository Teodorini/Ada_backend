// Crea un objeto literal que represente un estudiante. El mismo debe tener 
// las siguientes propiedades: nombre, edad y un array de notas (con 5 
// notas).

let estudiante = {
    nombre: "Melisa",
    edad: 34,
    notas: [7, 9, 8, 10, 9]
}
// Luego, escribe la función “procesarEstudiante”

function procesarEstudiante(estudiante) {
//1. Agregar una nueva nota al array de notas.
estudiante.notas.push(5);
// 2. Eliminar la primera nota del array. 
estudiante.notas.shift();
// 3. Calcular el promedio de las notas restantes. 
let suma = estudiante.notas.reduce((acumulador, nota) => acumulador + nota);
let promedio = suma / estudiante.notas.length;

// 4. Convertir el nombre del estudiante a mayúsculas. Para esto 
let mayusculas = estudiante.nombre.toUpperCase();


// 5. Devuelver un objeto con el nombre en mayúsculas y el promedio de 
// las notas. 
return {
    nombre : mayusculas,
    promedio: promedio
};
};
console.log(procesarEstudiante(estudiante));


