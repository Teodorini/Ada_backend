const readlineSync = require(`readline-sync`);

const edad = readlineSync.questionInt(`Ingresa tu edad: `);

// hacemos un if para ver si cumple con los requisitos de la edad

if (edad >= 18) {
    console.log(`Acceso permitido, eres mayor de 18`);
    
}else {
    console.log(`Acceso denegado, eres menor de 18`);
    
};
