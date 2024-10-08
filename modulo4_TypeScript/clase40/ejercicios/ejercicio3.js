"use strict";
// Ejercicio 3: Uso de enum para días de la semana 
// 1. Declara un enum llamado DiasDeLaSemana con los valores: Lunes, Martes, 
// Miercoles, Jueves, Viernes, Sabado, Domingo.
var diasDeLaSemana;
(function (diasDeLaSemana) {
    diasDeLaSemana[diasDeLaSemana["Lunes"] = 0] = "Lunes";
    diasDeLaSemana[diasDeLaSemana["Martes"] = 1] = "Martes";
    diasDeLaSemana[diasDeLaSemana["Miercoles"] = 2] = "Miercoles";
    diasDeLaSemana[diasDeLaSemana["Jueves"] = 3] = "Jueves";
    diasDeLaSemana[diasDeLaSemana["Viernes"] = 4] = "Viernes";
    diasDeLaSemana[diasDeLaSemana["Sabado"] = 5] = "Sabado";
    diasDeLaSemana[diasDeLaSemana["Domingo"] = 6] = "Domingo";
})(diasDeLaSemana || (diasDeLaSemana = {}));
;
// 2. Crea una función que reciba un día de la semana y devuelva un mensaje 
// indicando si es un día laborable o un día de descanso.
function dias(dia) {
    if (dia === diasDeLaSemana.Sabado || dia === diasDeLaSemana.Domingo) {
        return "Es un dia de descanso";
    }
    else {
        return "Es un dia laborable";
    }
}
// 3. Usa el enum para invocar la función con el valor Sabado y muestra el 
// resultado por consola.
console.log(dias(diasDeLaSemana.Lunes));
