const readlineSync = require(`readline-sync`);

const lenguajes = [`javascript`, `Python`, `Java`, `C++`];

const indiceSeleccionado = readlineSync.keyInSelect(lenguajes, `Cual es tu lenguaje de programacion favorito? :`);

if (indiceSeleccionado === -1) {
    console.log(`No seleccionaste ningun lenguaje. `);
    
} else {
    console.log(`Has seleccionado: ${lenguajes[indiceSeleccionado]}`);
    
};