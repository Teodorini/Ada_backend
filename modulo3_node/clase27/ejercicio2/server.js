// o Crea un servidor TCP que escuche en el puerto 9000.
// Cada vez que un cliente se conecte, el servidor debe registrar su 
// dirección y puerto.
// El servidor debe responder a cada mensaje recibido de un cliente 
// con "Mensaje recibido".

const net = require(`net`);
const activeConnection = [];
const server = net.createServer((socket) => {
    //obtener la direccion y el puerto del cliente
    clientAddress = `${socket.remoteAddress}`
    clientPort =  `${socket.remotePort}`
    //crear un objeto para la conexion actual
    const clientInfo = {
        address: clientAddress,
        port: clientPort,
        socket: socket
    };
    //agregar la conexion al array de conexiones activas
    activeConnection.push(clientInfo);
    console.log(`Cliente conectado desde: ${clientAddress} : ${clientPort}`);

    socket.on(`data`, (data) => {
        // console.log(`Mensaje recibido de ${clientAddress} : ${clientPort}`);
        socket.write(`mensaje recibido: ${data}`);
    });
    socket.on(`end`, () => {
        console.log(`Cliente ${clientAddress} desconectado`);
        
    });
    socket.on(`error`, (err) => {
        console.log(err.message);
        
    });
});
const PORT = 9000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    
});