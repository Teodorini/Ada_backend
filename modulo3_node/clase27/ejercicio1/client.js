
const net = require(`net`);
const readline = require(`readline-sync`);
const client = net.createConnection({port : 7000});

client.on(`connect`, () => {
    console.log(`conexion satisfactoria `);
    sendLine();
});
client.on(`data`, (data) => {
    console.log(`El server dice:` + data);
    
    client.end();
});
client.on(`end`, () => {
    console.log(`Cliente desconectado`);
    
});
client.on(`error`, (err) => {
    console.log(err.message);
    
});
function sendLine() {
    var line = readline.question(`\n Escriba un mensaje al servidor: `); //muestra un promp y lee la entrada sincrona
    if (line == "0") {   // verifica si el usuario ingresa 0
        client.end(); // finaliza si el usuario ingresa 0. cierra la conexion del server
        
    } else {
        client.write(line); // si el usuario no ingresa 0 envia el mensaje al server
    }
};




