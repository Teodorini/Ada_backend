//antes instalamos npm init -y para iniciarlo sin las preguntas
const { error } = require("console");
const net = require(`net`); // importamos modulo net

const server = net.createServer(); // creo el servidor maneja las conexiones entrantes

//eventos on se emite cuando el cliente se conecta
server.on(`connection`, (socket) => {
    socket.on(`data`, (data) => {   // creamos el evento data que es el que le envia al cliente la data que pasamos por parametro
        console.log(`\n El cliente` + socket.remoteAddress + " : " + socket.remotePort + " dice: " + data);  
        socket.write(`Mensaje recibido`) //respuesta al cliente confirmando la recepcion 
    }); 
    server.on(`close`, () => {  //close se emite cuando el cliente cierra la conecion
        console.log(`Comunicacion finalizada`);

    });

    server.on(`error`, (err) => {  // se emite cuando ocurre un error. manejo de errores del servidor
        console.log(err.message);  //muestra el error y el mensaje
        
    });

});
server.listen(5000, () => {  // desde donde escucha el servidor y ponemos el puerto
    console.log(`Servidor esta escuchando en el puerto`, server.address().port);
    
});

