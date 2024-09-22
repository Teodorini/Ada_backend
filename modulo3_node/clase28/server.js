const net = require(`net`); //Modulo para crear y gestionar conexiones de red TCP
const readline = require(`readline`); //Modulo para leer datos del usuario de forma no bloqueante.

//configuración de conexión
const OPTIONS = {
    port: 7200, // puerto en el que se conecta el cliente.
    host: `127.0.0.1`, // direccion IP del servidor
};

// crear la conexión TCP al servidor
const clientTCP = net.createConnection(OPTIONS);

// configurar la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin, // Flujo de entrada desde la consola
    output: process.stdout, // Flujo de salida a la consola
});

// Obtener el nombre del usuario desde los argumentos de linea de comandos(si no hay, usar UnKnown)
const userName = process.argv[2]?.split(`=`)[1] || `Unknown`;

// Función para manejar la entrada del usuario
const handleInput = () => {
    rl.question(`CLIENT --> `, (clientMsg) => { // Leer la entrada del usuario
        clientTCP.write(clientMsg); // Enviar el mensaje al servidor
        // Volver a llamar a handleInput para permitir mas entradas
        handleInput();
    });
};

// Manejar la conexión exitosa al servidor
clientTCP.on(`data`, (serverData) => {
    const serverMsg = serverData.toString(); // convertir los datos recibidos en una cadena de texto
    console.log(`SERVER -->`, serverMsg); // Imprimir el mensaje recibido del servidor
});

// Manejar datos recibidos del servidor
clientTCP.on(`end`, () => {
    console.log(`El servidor ha cerrado la conexión.`);
    rl.close(); // cerrar la interfaz de readline
    
});

// Manejar errores de conexión
clientTCP.on(`error`, (err) => {
    console.log(`Error en la conexión`, err); // Imprimir el error
    rl.close(); // Cerrar la interfaz de readline
    
});


