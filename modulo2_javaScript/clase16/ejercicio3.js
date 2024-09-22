// crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
let vueltas = [5, 8, 12, 3, 22];
let totalVueltas = vueltas.reduce(function(acumulador, vuelta){
   return acumulador + vuelta
});
console.log(`El total de vueltas es: ${totalVueltas}`);
// 1	Añadir una vuelta al principio del array
vueltas.unshift(7);

// 2 Eliminar la última vuelta del array: Usamos pop para eliminar la última vuelta del array y guardarla en la variable ultimaVuelta.
ultimaVuelta = vueltas.pop()

// Verificar si la vuelta 10 está en el array y agregarla al final si no está presente
// Usamos includes para verificar si la vuelta 10 está en el array y push para agregarla al final si no está.
let vuelta10 = vueltas.includes(10);
if (vuelta10 === false) {
    vueltas.push(10);
}
// Eliminar la primera vuelta del array. Usamos shift para eliminar la primera vuelta del array//y guardarla en la variable primeraVuelta.
primeraVuelta = vueltas.shift()

// Verificar si la vuelta 15 está en el array y agregarla al principio si no está.Usamos includes para verificar si la vuelta 15 está
let vuelta15 = vueltas.includes(15);
if (vuelta15 === false) {
    vueltas.unshift(15);
}
// Calcular el nuevo total de vueltas usando reduce Después de todas las operaciones, // recalculamos el total de vueltas utilizando reduce.
let nuevoTotal = vueltas.reduce(function(acumulador, vuelta){
    return acumulador + vuelta
});
console.log(`El nuevo total de vueltas es: ${nuevoTotal}`);