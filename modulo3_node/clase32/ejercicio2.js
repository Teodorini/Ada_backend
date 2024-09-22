const readlineSync = require(`readline-sync`);
const crypto = require(`crypto`);

const opciones = [`Mensaje de bienvenida`, `Generar un Hash de texto`, `Salir`];
const indexOpciones = readlineSync.keyInSelect(opciones, `Elija la opcion : `)

if (indexOpciones === -1) {
    console.log(`Cancelado.. elija otra opcion `);
    
}else if (indexOpciones === 0) {
    console.log(`Seleccionaste ${opciones[indexOpciones]}`);
    console.log(`Bienvenidos al sistema`);
    
} else if (indexOpciones === 1) {
    const data = readlineSync.question(`Ingrese el mensaje que desee encriptar: `);
    const hash = crypto.createHash(`sha256`);

    hash.update(data);
    const hashOutput = hash.digest(`hex`);
    console.log(`Su mensaje encriptado es: `, hashOutput);
    
    
} else if(indexOpciones === 2) {
    console.log(`Haz seleccionado: ${opciones[indexOpciones]}`);
    
    console.log(`Nos vemos...`);
    
} else {
    console.log(`No seleccionaste una opcion `);
    
};