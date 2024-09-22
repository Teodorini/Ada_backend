const net = require(`net`);


function createClient(id, message) {
    const client = new net.Socket();
    
    client.connect(9000, `127.0.0.1`, () => {
        console.log(`Cliente ${id} conectado al servidor `);
        //enviar un mensaje unico al servidor
        client.write(message);
    });
    client.on(`data`, (data) => {
        console.log(`El cliente ${id} recibio ${data} `);
        //cerrar la conexiond despues de recibir la respuesta
        client.end();
    });

    client.on(`end`, () => {
        console.log(`cliente ${id} desconectado`);
        
    });

    client.on(`error`, (err) => {
        console.log(`Error em el cliente ${id}: ${err.message}`);
        
    });

}
//crear varios clientes con mensajes
for (let i = 1; i <= 5; i++) {
    createClient(i, `Mensaje desde el cliente ${i}`);
    
};
