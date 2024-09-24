const net = require('net');
// Importamos funciones de otros módulos
// 'createCounter' para manejar el contador,
// 'displayMessage' para mostrar mensajes en la consola.
const { createCounter } = require('./model');
const { displayMessage } = require('./views');
const { handleClient } = require('./controller');

// Configuración del servidor
const server = net.createServer();
// Creamos una instancia del contador.
const counter = createCounter();


// Configuramos el servidor para manejar nuevas conexiones de clientes.
server.on('connection', (socket) => {
    console.log('Cliente conectado');
// Para cada cliente que se conecta, llamamos a la función 'handleClient'
// para manejar la comunicación con ese cliente.
    handleClient(socket, counter, displayMessage);
});

server.listen(8000, () => {
    console.log('Servidor escuchando en el puerto 8000');
});
