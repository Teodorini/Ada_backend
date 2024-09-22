// Crear la función calculadorIMC() que reciba la altura en metros y el peso en 
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función 
// probando diferentes valores.

function calcularImc(metros, peso) {
    let cuenta = peso / (metros * metros);
    return cuenta
}
console.log("Su IMC es: " + calcularImc(1.57, 70));