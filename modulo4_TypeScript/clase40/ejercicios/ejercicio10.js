"use strict";
// 1. Declara un enum llamado NivelesDeAcceso con los valores: Admin,
// Usuario, Invitado.
var NivelesDeAcceso;
(function (NivelesDeAcceso) {
    NivelesDeAcceso[NivelesDeAcceso["Admin"] = 0] = "Admin";
    NivelesDeAcceso[NivelesDeAcceso["Usuario"] = 1] = "Usuario";
    NivelesDeAcceso[NivelesDeAcceso["Invitado"] = 2] = "Invitado";
})(NivelesDeAcceso || (NivelesDeAcceso = {}));
// 2. Crea una función que reciba un nivel de acceso y devuelva un mensaje
// indicando el tipo de permisos disponibles para ese nivel.
function permisos(nivel) {
    switch (nivel) {
        case NivelesDeAcceso.Admin:
            return "Permisos Ilimitados";
        case NivelesDeAcceso.Usuario:
            return "Permisos Limitados";
        case NivelesDeAcceso.Invitado:
            return "Sin permisos";
        default:
            return "Permisos inexistentes";
    }
}
// 3. Usa el enum para llamar a la función con el nivel Usuario y muestra el
// resultado por consola.
console.log(permisos(NivelesDeAcceso.Usuario));
