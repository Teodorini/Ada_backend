function saludar(nombre) {
    console.log(`Hola ${nombre} como estas?`);
    
}
saludar(`Mariana`);

function comprar(fruta1, fruta2, fruta3) {
    console.log(`Hoy compramos ${fruta1} ${fruta2} ${fruta3}`);
    
}
comprar("manzanas", "bananas", "naranjas")



function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
        
    }
    let promedio = suma / numeros.length
    return promedio
}
console.log(calcularPromedio([10, 7, 12, 1]))