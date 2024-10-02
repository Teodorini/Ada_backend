function ejemploVar() {
    //@ts-ignore
    console.log(variableVar); // undefined por hoisting 
    var variableVar = "Soy una variable var";
    console.log(variableVar); // log normal
}
ejemploVar();

// Ejemplo de let: alcance de bloque y sin hoisting
function ejemploLet() {
    //console.log(variableLet); // error no hay acceso a la variable
    let variableLet = "Soy una variable let"
    console.log(variableLet);
}
ejemploLet();

// Ejemplo de const: valor constante y alcance de bloque
function ejemploConst() {
    const variableConst = "Soy una variable const"
    console.log(variableConst);
    //variableConst = "otro valor"; // error al querer reasignar un const
}
ejemploConst();