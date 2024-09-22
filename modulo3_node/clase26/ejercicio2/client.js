const net = require(`net`);
const readline = require(`readline-sync`);
const client = net.createConnection({port: 5000, host: `localhost`},() => {
    console.log(`Conexion exitosa`);
    client.write(`Hola servidor`);
 
});

client.on(`data`, (data) => {
    console.log(`El servidor dice: ` + data.toString());
    client.end();
});



client.on(`error`, (err) => {
   console.log(err.message);
});



