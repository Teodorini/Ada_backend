const path = require(`path`);
const net = require(`net`);

const server =  net.createServer((socket) => {
    console.log(`Cliente conectado `);

    socket.on(`data`, (data) => {
        console.log(`Mensaje del cliente: `, data.toString());
        const absolut = path.isAbsolute(data.toString());
        if (!absolut) {
            socket.write(`La ruta ${data.toString()} es relativa.`);
            
        } else {
            socket.write(`La ruta ${data.toString()} es absoluta.`);
        }
    });
    socket.on(`close`, () => {
        console.log(`Desconexion satisfactoria.`);
        
    });

    socket.on(`error`, (err) => {
        console.log(err.message);
        
    });
    
});
server.listen(8080, () => {
    console.log(`Servidor escuchando en el puerto 8080`);
    
});