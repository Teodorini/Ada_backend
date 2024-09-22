//importamos el modulo fs
const fs = require(`fs`);

//1. Leer el archivo json
// Leemos el archivo persona.json y lo convertimos en un objeto js
fs.readFile(`persona.json`, `utf-8`, (err, data) => {
    if (err) {
        console.log(`error al leer el archivo JSON`, err);
        return;
    }
// 2. Mostrar el contenido JSON leido como texto
console.log(`Contenido del archivo JSON (como texto)`);
console.log(data);

//3. Convertir la cadena JSON en un objeto JS
const persona = JSON.parse(data);
// 4. Mostrar el objeto JS convertido.

console.log(`JSON convertido a objeto JS`);
console.log(persona);

// 5. Acceder a los valores del objeto JS
console.log(`Accediendo a los valores del objeto:`);
console.log("Nombre: " , persona.nombre);
console.log("ciudad: ", persona.direccion.ciudad);


//6. Modificar el objeto y convertirlo nuevamente a JSON
persona.edad = 31;
// Convertimos el objeto JS de nuevo a una cadena JSON
// Null y 2 son para formatear el JSON con identacion
const nuevoJSON = JSON.stringify(persona, null, 2);

// 7. Guardar el JSON modificado en un nuevo archivo
fs.writeFile(`nuevaPersona.json`, nuevoJSON, (err) => {
    if (err) {
        console.log(`Error al escribir el archivo JSON`, err);
        return;
    }
    console.log(`JSON modificado guardado en nuevaPersona.json`);
    
} )





});