const net = require(`net`);


const server = net.createServer();

server.on(`connection`, (socket) => {
    console.log(`cliente conectado`);
    socket.on(`data`, (data) => {
        socket.write(`\n Hola Cliente`);
        
    });

    socket.on(`end`, () => {
        console.log(`El cliente se desconecto`);
        
    });

    socket.on(`error`, (err) => {
        console.log(err.message);
        
    });
    socket.setTimeout(10000);
    socket.on(`timeout`, () => {
        console.log(`Tiempo de espera alcanzado`);
        socket.end();
    })
});
server.listen(7000, () => {
    console.log(`Server escuchando en el port 7000`);
    
});