// Ejercicio 4: Do While 
// Escribe un programa que solicite al usuario ingresar una contraseña. Si 
// la contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
// ingrese la correcta. La contraseña correcta es "1234". 

const prompt = require("prompt-sync")();


let contraseñaCorrecta = 1234
let contraseña ;
do {  
    contraseña = parseInt(prompt("Ingrese su contraseña: "));
    
   
    
    if (contraseña !== contraseñaCorrecta) {
        contraseña = parseInt(prompt("Incorrecta! intentelo nuevamente "));
    }
   
    
     
} while (contraseña !== contraseñaCorrecta );
console.log("Acceso permitido!");








