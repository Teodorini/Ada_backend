// Ejercicio 15: Arrays multidimensionales
// 1. Declara un array multidimensional que represente una tabla de notas de 3
// estudiantes. Cada subarray debe tener el nombre del estudiante y sus
// notas en tres materias.
let estudiantes:[string, number, number, number] []=[
    ["Juan", 10, 5, 4],
    ["Maria", 7, 9, 3],
    ["Carla", 7, 8, 6]
]
// // 2. Añade los nombres "Maria", "Pedro" y "Luis", junto con sus respectivas
// // notas.
estudiantes.push(["maria", 9, 8, 7], ["Pedro", 6, 2, 9],["Luis", 8, 10, 7]);
// console.log(estudiantes);

// // 3. Imprime el nombre y las notas del segundo estudiante (Pedro).
console.log(estudiantes[1]);


// // 4. Muestra la nota promedio de cada estudiante recorriendo el array.
estudiantes.forEach( estudiante => {
     let promedio = (estudiante[1] + estudiante[2] + estudiante[3]) / 3;
     console.log(`${estudiante[0]} su promedio es: ${promedio.toFixed(3)}`);
     
});
