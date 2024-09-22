let estudiantes = [
    { nombre: 'John', promedio: 8.5, aprobado: true }, 
    { nombre: 'Jane', promedio: 7, aprobado: true }, 
    { nombre: 'June', promedio: 3, aprobado: false },  
    { nombre: 'Jake', promedio: 4, aprobado: false },
    { nombre: 'Jill', promedio: 9, aprobado: true }
];
// 1) Filtra los estudiantes en dos listas: aprobados y desaprobados.
let aprobados = estudiantes.filter((alumno) => alumno.aprobado == true);
let desaprobados = estudiantes.filter((alumno) => alumno.aprobado == false);

// 2) Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.
aprobados.unshift({nombre:'Jenny', promedio: 8, aprobado: true});
aprobados.push({nombre: `Juliet`, promedio: 7.5, aprobados: true});

// 3) Manipula la lista de desaprobados eliminando al primero y al último estudiante.
// desaprobados.shift();
// desaprobados.pop();

//Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados y muestra su índice si está presente.
let estudianteEspecifico = aprobados.map(function(alumno){
    return alumno.nombre
});
let indice = estudianteEspecifico.indexOf("Jane");
console.log(`El alumno buscado se encuentra en la posición: ${indice}`);

// 5) Utiliza includes para verificar si un estudiante está en la lista de desaprobados
let buscarNombre = "Jake";
if (desaprobados.map(alumno => alumno.nombre).includes(buscarNombre)) {
    console.log(`${buscarNombre} se encuentra en la lista de desaprobados`);
} else{
    console.log(`${buscarNombre} no se encuentra en esta lista`);
}
// 6) Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
console.log("Estudiantes Aprobados!");
console.log(aprobados);
console.log("Estudiantes desaprobados");
console.log(desaprobados);