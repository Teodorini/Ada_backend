// instalar npm install readline-sync en cliente-

const net = require(`net`); // volvemos a hacer uso del modulo net
const readline = require(`readline-sync`); //lee las entradas del usuario

const options = {
    port: 5000,            // defino las opciones de conexion para el cliente
    host: `127.0.0.1`
};

// creo la conexion 

const client = net.createConnection(options);

//eventos
client.on(`connect`, () => {
    console.log(`Conexion establecida`);
    sendLine(); //llama al metodo para que el usuario pueda ingresar el mensaje. 
});

client.on(`data`, (data) => { // se pasa data como elemento y el argumento para el manejo de los datos
    console.log(`El servidor dice: ` + data); //muestra los datos recibidos del servidor en la consola
    sendLine(); //llama a la funcion
});

client.on(`error`, (err) => {
    console.log(err.message);  //que muestre el mensaje de error

});

function sendLine() {
    var line = readline.question(`\n Digite una frase\t`); //muestra un promp y lee la entrada sincrona
    if (line == "0") {   // verifica si el usuario ingresa 0
        client.end(); // finaliza si el usuario ingresa 0. cierra la conexion del server
        
    } else {
        client.write(line); // si el usuario no ingresa 0 envia el mensaje al server
    }
}


