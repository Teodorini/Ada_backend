// a) Crear un array de objetos llamado mascotas que contenga al menos 5 
// mascotas. Cada mascota debe tener las siguientes propiedades: 
let mascotas = [
    {id: 1, nombre: "Sofi", especie: "perro", edad: 16, disponible: false},
    {id: 2, nombre: "Jacke", especie: "perro", edad: 13, disponible: false},
    {id: 3, nombre: "Lola", especie: "gato", edad: 4, disponible: true},
    {id: 4, nombre: "Negrito", especie: "gato", edad: 1, disponible: true},
    {id: 5, nombre: "Gloria", especie: "perro", edad: 9, disponible: true}
];

// b) Crear un array de objetos llamado propietarios con al menos 3 
// propietarios. Cada propietario debe tener: 
let propietarios = [
    {id: 1, 
    nombre: "Melisa", 
    email: "melisa.@gmail.com",
    mascotasAdoptadas: []
    },
    {id: 2, 
    nombre: "Marcos", 
    email: "marcos.@gmail.com",
    mascotasAdoptadas: []
    },
    {id: 3, 
    nombre: "Romina", 
    email: "romina.@gmail.com",
    mascotasAdoptadas: []
    },
    {id: 4, 
    nombre: "Alejandro", 
    email: "alejandro@gmail.com",
    mascotasAdoptadas: []
    },
    {id: 5, 
    nombre: "Agustina", 
    email: "agustina@gmail.com",
    mascotasAdoptadas: []
    },
];
// 2. Funciones de Gestión de Mascotas 
// a) Implementar una función agregarMascota(id, nombre, especie, edad) 
// que agregue una nueva mascota al array mascotas. 
let contadorId = mascotas.length;  // declaro un contador desde el incide de mi OBJ ID.

function agregarMascota(mascotas, nombre, especie, edad, disponible) {  //declaro funcion
    contadorId ++; // le pido que por cada obj agregado incremente el contadorId
    let nuevaMascota = {
        id: contadorId, 
        nombre: nombre,
        especie: especie,                   // agrego mi objeto nuevaMascota
        edad: edad,
        disponible: disponible
        };
      
    mascotas.push(nuevaMascota);  // le pido que me agregue nuevaMascota a mascotas
}
agregarMascota(mascotas, "Kuki", "perro", 13, false );
agregarMascota(mascotas, "Catalina", "gato", 4, true );   //Agrego las mascotas que quiero llamando a la funcion y pasando el objeto.
// console.log(mascotas);

// b) Crear una función buscarMascota(criterio, valor) que permita buscar 
// mascotas por nombre o especie.

function buscarMascota(criterio, valor) {
   const resultado = mascotas.filter(mascota => mascota[criterio].toLowerCase() === valor.toLowerCase()) ; //filtrar las mascotas que cumplan con el criterio y valor ingresados. al poner [criterio] entre
//[] se accede a la propiedad. con punto buscaria una propiedad llamada criterio. 

    return resultado.length > 0 ? resultado : `No se encontró una mascota con ${criterio} ${valor}`; //ternario por si no se encuentra criterio, valor.
}
console.log(buscarMascota("nombre", "kuki"));

// 3. Gestión de Propietarios 
// a) Implementar una función registrarPropietario(nombre, email) que 
// agregue un nuevo propietario al array propietarios.
 let propietarioId = propietarios.length;

 function gestionPropietario(propietarios,nombre, email) {
   propietarioId ++
   let nuevoPropietario = {
    id: propietarioId,  
    nombre: nombre,
    email: email,
};
propietarios.push(nuevoPropietario);
}
gestionPropietario(propietarios,"Mariana", "mariana@gmail.com" )
// console.log(propietarios);

// b) Crear una función buscarPropietario(email) que devuelva la 
// información de un propietario dado su email. 

function buscarPropietario(email) {
   const buscarPorMail =  propietarios.filter(propietario => propietario.email === email);
   return buscarPorMail.length > 0 ? buscarPorMail : `El email ${email} no existe`;
}
// console.log(buscarPropietario("clara@gmail.com"));

// 4. Sistema de Adopciones 
// a) Desarrollar una función adoptarMascota(idMascota, idPropietario) que 
// marque una mascota como no disponible y la agregue a la lista de 
// mascotas adoptadas del propietario.

function adoptarMacotas(idMascota, idPropietario) {
    let mascota = mascotas.find(mascot => mascot.idMascota === idMascota);
   
    if (!mascota) {
        
        return `La mascota ${idMascota} no esta disponible`;
    } 
    if (!mascota.disponible) {
        return `La mascota ${mascota.nombre} no está disponible para adopción`
    }
    
    let propietario = propietarios.find(prop => prop.idPropietario === idPropietario)
    mascota.disponible = false;

    propietario.mascotasAdoptadas.push(mascota);

    return `La mascota ${mascota.nombre} fue adoptada por ${propietario.nombre}`;
    
};
console.log(adoptarMacotas(4, 3));














