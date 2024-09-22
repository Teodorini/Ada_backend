
const fs = require(`fs`);
// • Lee el archivo data.json, modifica el campo age a un nuevo valor, y 
// guarda el archivo modificado.

fs.readFile(`data.json`, `utf-8`, (err, data) => {
    if (err) {
        console.log(`Error al leer el Json`, err);
        return;
    }
    const persona = JSON.parse(data);
    persona.age = 33;
    const nuevoJSON = JSON.stringify(persona, null, 2);
    
    fs.writeFile(`dataModificada.json`, nuevoJSON, (err) => {
        if (err) {
            console.log(`Error al escribir el archivo Json`, err);
            return;
        }
        console.log(`JSON modificado guardado en dataModificada.json`);
        
    });  
});



