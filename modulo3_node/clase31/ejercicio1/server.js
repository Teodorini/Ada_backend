const net = require(`net`);
const {v4 : uuid4} = require(`uuid`);

const server = net.createServer((socket) => {
const idV4 = uuid4();

console.log("Conexion establecida "); 

console.log("UUID V4: ", idV4);
    socket.write(`Su ID único es: ${idV4}`);
    

    socket.on(`end`, () => {
        console.log(`Conexion finalizada`);
        
    })
});

server. listen(8080, () => {
    console.log(`Servidor escuchando en el puerto 8080`);
    
});