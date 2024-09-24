// Función para manejar la comunicación con el cliente.
function handleClient(socket, counter, displayMessage) {
    // Maneja los datos recibidos del cliente.
    socket.on('data', (data) => {
        const message = data.toString(); // Convierte los datos recibidos a una cadena
        const count = counter.increment(); // Incrementa el contador.
        const response = `${count}: ${message}`; // Crea la respuesta con el número de secuencia y el mensaje.
        displayMessage(response); // Muestra la respuesta en la consola del servidor.
        socket.write(response);  // Envía la respuesta al cliente.
    });

    // Maneja el evento cuando el cliente cierra la conexión.
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
}

module.exports = { handleClient };
