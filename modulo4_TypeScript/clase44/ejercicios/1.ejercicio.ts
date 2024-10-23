// Actividad 1: Usar For...In para recorrer propiedades de un objeto 
// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un 
// bucle for...in para recorrer y mostrar cada propiedad y su valor.

export const persona = {
    nombre: "Mariana",
    edad: 43,
    ciudad: "Buenos Aires"
};

for(let propiedad in persona) {
    console.log(`Clave ${propiedad}, Valor: ${persona[propiedad as keyof typeof persona]}`);
    // propiedad as keyof typeof persona: Con esto, le decimos al compilador que la variable propiedad
// es una clave válida de las propiedades del objeto persona, es decir, una de las propiedades de 
// persona (nombre, edad o ciudad).
    
}