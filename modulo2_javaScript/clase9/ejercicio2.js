// evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, 
// debe imprimir el texto "tenés clases". Para cualquier otro caso debe 
// imprimir "no tenés clases".

let dia = "jueves"
switch (dia) {
    case "lunes": case "miercoles": case "viernes":
        console.log("tenés clases");
        break;

    default: console.log("no tenés clases");
        break;
}
