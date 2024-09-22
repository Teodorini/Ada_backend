const net = require(`net`);

const server = net.createServer((socket) => {
    console.log(`Cliente conectado` , socket.remoteAddress + ", " + socket.remotePort);
    

    socket.on(`data`, (data) => {
        console.log(`\n Datos recibidos `, data.toString());
        socket.write(`\n Hola cliente`);
        socket.write(data);
    });
   

    socket.on(`end`, () => {
        console.log(`El cliente se ha desconectado`);
        
    });

    socket.on(`error`, (err) => {
        console.log(err.message);
        
    });

});
server.listen(5000, () => {
    console.log(`servidor escuchando en el puerto 5000`);
    
});

