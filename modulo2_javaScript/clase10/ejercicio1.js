// Ejercicio 1: Switch  
// Declará las variables vehiculo y litrosConsumidos. A continuación, 
// realizá los cálculos para obtener el total a pagar, teniendo en cuenta las 
// siguientes consideraciones: 
// ✓ Si el vehículo es “coche”, el precio por litro es de $86. 
// ✓ Si el vehículo es “moto”, el precio por litro es de $70. 
// ✓ Si el vehículo es “autobús”, el precio por litro es de $55. 
// ✓ Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al 
// total a pagar. 
// ✓ Si los litros consumidos son mayores a 25, se ha de añadir $25 al 
// total a pagar. 
// Finalmente, imprimí en consola el total a pagar. 

let vehiculo = "moto";
let LitrosConsumidos = 10;
let precioPorLitro;
let totalAPagar;

switch (vehiculo) {
    case "coche":
      precioPorLitro = 86;
     totalAPagar = LitrosConsumidos * precioPorLitro
        break;
    case "moto":
            precioPorLitro = 70;
            totalAPagar = LitrosConsumidos * precioPorLitro
              break;    
    case "autobús":
            precioPorLitro = 55;
            totalAPagar = LitrosConsumidos * precioPorLitro
                 break;

    default: 
    console.log("Vehiculo inexistente");
        break;
}


if (LitrosConsumidos > 25) {
    totalAPagar = totalAPagar + 25;
}else {
    totalAPagar = totalAPagar + 50;
}
console.log(`El total a pagar es: ${totalAPagar}`);