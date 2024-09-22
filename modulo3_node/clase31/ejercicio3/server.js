const net = require(`net`);
const {v1: uuid1} = require(`uuid`);

const server = net.createServer((socket) => {
    console.log(`Cliente conectado`);
    
const uuid = uuid1();

const objetJson = {
    uuid: uuid,
};

socket.write(JSON.stringify(objetJson));
        socket.end();

        socket.on(`end`, () => {
            console.log(`Cliente desconectado`);
            
        });   
    
    
});

server.listen(7000, () => {
    console.log(`Servidor escuchando en el puerto 7000`);
    
});