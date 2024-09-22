const net = require(`net`);

const client = net.createConnection({port: 8080});

client.on(`connect`, () => {
    console.log(`Conectado`);
    const ruta = `C:/home/user/docs/file.txt`;
    client.write(ruta);
    client.end();
});

client.on(`data`, (data) => {
    console.log(`Mensaje del servidor: `, data.toString());
    
});

client.on(`end`, () => {
    console.log(`Servidor desconectado`);
    
});

client.on(`error`, (err) => {
    console.log(err.message);
    
});