
const net = require(`net`);

const client = net.createConnection({port : 8080});

client.on(`connect`, () => {
    console.log(`conexion satisfactoria `);
  
});
client.on(`data`, (data) => {
    console.log(`El server dice:`, data.toString());
});
client.on(`end`, () => {
    console.log(`Cliente desconectado`);
    
});
client.on(`error`, (err) => {
    console.log(err.message);
    
});
