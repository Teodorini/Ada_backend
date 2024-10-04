// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto 
// empleado con las propiedades nombre (string) y salario (number), y un número 
// que represente el porcentaje de aumento. La función debe aumentar el salario 
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado.


let empleado = {
    nombre: "Juan",
    salario: 50000
};

function aumentarSalario(empleado: {nombre:string, salario:number}, porcentaje: number):number {
    const aumento = empleado.salario * (porcentaje/100);
    empleado.salario += aumento;
    return empleado.salario
}
const nuevoSalario = aumentarSalario(empleado, 50); // aumenta 50% quien pudiera!

console.log(`El nuevo salario con el aumento es de: ${nuevoSalario}`);
