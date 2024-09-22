// En este ejercicio tienes un array ‘colores’ que contiene nombres de 
// diferentes colores. Tu tarea es realizar las siguientes operaciones: 
// ✓ Imprimir todos los colores del array.
 
let colores = ["rojo", "verde", "azul", "amarillo"];
let arrayColores = [];
for (let i = 0; i < colores.length; i++) {
    let color = colores[i]
    arrayColores.push(color);
}
console.log(arrayColores);

// ✓ Modificar el primer color del array a "blanco".
colores[0] = "blanco";
console.log(colores);

// ✓ Agregar dos nuevos colores al final del array: "negro" y "gris".
colores.push("violeta", "naranja");
console.log(colores);
