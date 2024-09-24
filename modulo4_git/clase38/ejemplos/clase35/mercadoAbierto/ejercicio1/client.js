const net = require('net');
const readline = require('readline');

// Configuración del cliente
const client = new net.Socket();
client.connect(8000, '127.0.0.1', () => {
    console.log('Conectado al servidor');
    console.log(`Introduce una frase: `)
 // Configuramos la interfaz para leer la entrada del usuario desde la consola.
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 // Escucha las líneas de entrada del usuario y las envía al servidor.
    rl.on('line', (input) => {
        if (input.toLowerCase() === 'salir') {
            client.end(); // Cierra la conexión si el usuario escribe 'salir'.
            return;
        }
        client.write(input); // Envía el mensaje al servidor.
    });

    client.on('data', (data) => {
        console.log(`Respuesta del servidor: ${data.toString()}`);
    });
// Maneja el evento cuando la conexión con el servidor se cierra.
    client.on('close', () => {
        console.log('Conexión cerrada');
        rl.close();  // Cierra la interfaz de lectura de la consola.
    });
});
