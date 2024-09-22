// El objetivo de este ejercicio es imprimir en consola un texto que irá 
// variando según el día que contenga la variable dia. 

let dia = "viernes";

switch (dia) {
    case "lunes":
        console.log("Buen comienzo de semana!");
        break;
        case "martes":
        console.log("Arriba que es martes!");
        break;
        case "miercoles":
        console.log("Llegamos a la mitad!!");
        break;
        case "jueves":
        console.log("Ya casi, ya casi!");
        break;
        case "viernes":
        console.log("Viernes! Joda, joda, joda");
        break;
        case "sabado":
        console.log("Sábado a disfrutar");
        break;
        case "domingo":
        console.log("Domingo de descanso");
        break;

    default: console.log("El dato ingresado no corresponde a un dia de la semana valido");
        break;
}