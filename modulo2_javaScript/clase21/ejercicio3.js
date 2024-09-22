const prompt = require("prompt-sync")();
// 1. Estructura de Datos 
// a) Crear un array de objetos llamado libros que contenga al menos 10 libros. 
let libros = [
    {id: 1, titulo: "Harry Potter y la pidra filosofal", autor: "JK Rowling", anio: 1997, genero: "Ciencia Ficcion", disponible: []},
    {id: 2, titulo: "Rayuela", autor: "Cortazar Julio", anio: 1963, genero: "Novela", disponible:[] },
    {id: 3, titulo: "Historias de Divan", autor: "Rolon Gabriel", anio: 2017, genero: "Autoayuda", disponible: []},
    {id: 4, titulo: "1984", autor: "Orwell George", anio: 1949, genero: "Fantasia", disponible: []},
    {id: 5, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", anio: 1960, genero: "Fantasia", disponible: []},
    {id: 6, titulo: "Matar a un ruiseñor", autor: "Harper Lee", anio: 1960, genero:"Ciencia Ficcion" , disponible: []},
    {id: 7, titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: 1813, genero: "Clasico", disponible: []},
    {id: 8, titulo: "El gran Gatsby", autor: "F Scott Fitzgerald", anio: 1925, genero: "Drama", disponible: []},
    {id: 9, titulo: "Ficciones", autor: "Jorge Luis Borges", anio: 1944, genero: "Cuentos", disponible: []},
    {id: 10, titulo: "El cuento de la criada", autor: "Margaret Atwood", anio: 1985, genero: "Ciencia Ficcion", disponible: []},
    
];
// b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. 
const usuarios = [
    {id: 1, nombre: "Juan Perez", email: "juan.perez@example.com", librosPrestados: []},
    {id: 2, nombre: "Maria Lopez", email: "maria.lopez@example.com", librosPrestados: []},
    {id: 3, nombre: "Carlos Martinez", email: "carlos.martinez@example.com", librosPrestados: []},
    {id: 4, nombre: "Mariano Gimenez", email: "MARIANO.GIMENEZ@EXAMPLE.COM", librosPrestados: []},
    {id: 5, nombre: "Juana Campos", email: "juana.campos@example.com", librosPrestados: []}
];





/*b) Crear una función buscarLibro(criterio, valor) que permita buscar 
libros por título, autor o género utilizando el algoritmo de búsqueda lineal.*/
// function buscarLibro(criterio, valor) {
    
//     const resultado = libros.filter(libro => libro[criterio] === valor);
    
//     resultado.length > 0 ? resultado : "No se encontro ningun libro";
   
//     console.log(resultado);
   
//    };
//    buscarLibro("genero", "cuentos");

// function buscarLibro(criterio, valor) {
//     //itero sobre el array de libros
//     for (let i = 0; i < libros.length; i++) {
       
//         //verifico que el criterio coincida con el criterio dado y si el valor es igual al proporcionado
//         if (libros[i][criterio] && libros[i][criterio] === valor) {
//             //devolverlo si se encuentra 
//            return console.log(libros[i]);
            
            
//         } 
       
//         } 
// //si no lo encuentra
// return null
    
// }
// buscarLibro("titulo", "Rayuela");


// function ordenarLibros(criterio){
//     let cantidadDeLibros = libros.length;
//     // ordeno con la formula burbuja para que divida en dos partes la busqueda
//     // e ingrese paralelamente a cada posicion de libro
//     for (let i = 0; i < cantidadDeLibros - 1; i++) {
//         for (let j = 0; j < cantidadDeLibros - i - 1; j++) {
//             if (libros[j][criterio] > libros[j + 1][criterio]){
//                 [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
//             }
//         }
//     } 
//     let librosOrdenados = libros;
//     console.log(librosOrdenados);
//     }
//     ordenarLibros("titulo");
//     ordenarLibros("anio");

// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le 
// pase por parámetro.
// function borrarLibro(id) {
//     let indice = libros.findIndex(libro => libro.id === id); //encuentra el indice 
   
//     if (indice !== -1) {   //si el indice es diferente a -1. 
//         libros.splice(indice, 1); //el 1 indica cuantos elementos eliminar
//     }
// }
// borrarLibro(10);
// console.log(libros);
// 3. Gestión de Usuarios 
// a) Implementar una función registrarUsuario(nombre, email) que 
// agregue un nuevo usuario al array usuarios.
// contador que se autoincrementa al id usuarios
// let contadorIdUs = usuarios.length + 1;

// function registrarUsuario (usuarios, id, nombre, email, librosPrestados){
//     contadorIdUs++;
//     // declaro una nueva vvariable con el nuevo usuario
//     let nuevoUsuario = {id, nombre, email, librosPrestados};
    
//     usuarios.push(nuevoUsuario); 
// };
// registrarUsuario(usuarios, contadorIdUs, "Melisa Esposito", "melisa.espo@gmail.com",[]);
// console.log(usuarios);
// b) Implementar una función mostrarTodosLosUsuarios() que me 
// devuelva el array completo de usuarios 
// function mostrarTodosLosUsuarios(usuarios) {
//     return usuarios;
// }
// console.log(mostrarTodosLosUsuarios(usuarios));
// c) Crear una función buscarUsuario(email) que devuelva la información 
// de un usuario dado su email. 
// function buscarUsuario(email) {
//     let emailUsuario = usuarios.filter(usuario => usuario.email === email);
//      return emailUsuario;
//  }
//  console.log(buscarUsuario("maria.lopez@example.com"));

// d) Implementar una función borrarUsuario(nombre, email) que elimine el 
// usuario seleccionado. 

// function borrarUsuario(nombre, email) {
    
//     let verificar = usuarios.findIndex(usuario => usuario.nombre === nombre || usuario.email === email);
//     if (verificar !== -1) {   
//         usuarios.splice(verificar, 1); 
//     }
// }
// borrarUsuario("Juana Campos", "juana.campos@example.com");
 // console.log(usuarios);


 // 4. Sistema de Préstamos 
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque 
// un libro como no disponible y lo agregue a la lista de libros prestados 
// del usuario.

// function prestarLibro(idLibro, idUsuario) {
//     Iterar en cada libro y cada usuario para encontrar el id igual al id ingresado.
//     let libro = libros.find(libro => libro.id === idLibro);
//     let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    
//     verificar si el libro existe y esta disponible
//     if (libro && libro.disponible) {

//         si está lo marcamos como no disponible y lo agregamos a usuarios.libros prestados
//         libro.disponible = false;
//         usuario.librosPrestados.push(idLibro);
//         console.log(`El libro ${libro.titulo} ha sido prestado a ${usuario.nombre}`);
        
//     } else{
//         console.log(`El libro ${idLibro} o el usuario ${idUsuario} no existen`);
        
//     }
// }

// prestarLibro(2, 1);
// prestarLibro(1, 2);

// console.log(libros);

// console.log(usuarios);

// b) Implementar una función devolverLibro(idLibro, idUsuario) que 
// marque un libro como disponible y lo elimine de la lista de libros 
// prestados del usuario. 

// function devolverLibro(idLibro, idUsuario) {
//     let libro = libros.find(libro => libro.id === idLibro);
//     let usuario = usuarios.find(usuario => usuario.id === idUsuario);
// if (libro && !libro.disponible) {
//     libro.disponible = true;
// usuario.librosPrestados.pop(idLibro);
// console.log(`El libro ${libro.titulo} ha sido devuelto por ${usuario.nombre}`);

// }

// }
// devolverLibro(2, 1);
// devolverLibro(1, 2);
// console.log(libros);
// console.log(usuarios);

// // 5. Reportes 
// // a) Crear una función generarReporteLibros() que utilice métodos 
// // avanzados de arrays (.map(), .filter(), .reduce()) para generar un 
// function generarReporteLibros(libros) {

//     // ✓ Cantidad total de libros. 
//     let reporteTotalLibros = libros.reduce((total) => total + 1, 0);        
//     // console.log(`La cantidad total es de : ${reporteTotalLibros} libros.`);
    
//     // ✓ Cantidad de libros prestados. 
//     let reporteLibrosPrestados = usuarios.reduce((total, usuario) => total + usuario.librosPrestados.length, 0);
//     // console.log(`La cantidad de libros prestados es de ${reporteLibrosPrestados}`);
    
//     // ✓ Cantidad de libros por género.// armo un array con los generos
//     const generos = ["Fantasia", "Novela","Autoayuda", "Drama", "Clasico", "Ciencia Ficcion", "Cuentos"];
    
//     let cantidadGenero = generos.map(genero =>{
//         return {
//             genero: genero,
//             cantidad: libros.filter(libro => libro.genero === genero).length  // filtra cada genero y cuenta la cantidad por cada uno
//         };
//     });
//     console.log(cantidadGenero);
//     // ✓ Libro más antiguo y más nuevo 
//         let libroMasAntiguo = libros.reduce((antiguo, libro) => {    
//         return (antiguo.anio < libro.anio) ? antiguo : libro;    
        
//      });
//      let libroMasNuevo = libros.reduce((nuevo, libro) =>{
//          return (nuevo.anio > libro.anio) ? nuevo : libro;
//      });
     
//      return {
         
//          totalDeLibros: reporteTotalLibros,
//          librosPrestadosrestados: reporteLibrosPrestados,
//          cantidadPorGenero: cantidadGenero,
//          antiguo: libroMasAntiguo,
//          nuevo: libroMasNuevo
//      }
//      }
//      console.log(generarReporteLibros(libros));

// // 6. Identificación Avanzada de libros 
// // a) Implementar una función librosConPalabrasEnTitulo() que identifique 
// // y muestre todos los libros cuyo título contiene más de una palabra 
// // b) La función debe devolver un array con los títulos de esos libros y // mostrarlo en la consola.
// function librosConPalabrasEnTitulo(libros) {
//     //filtrar los libros que tienen mas de una palabra y la separo por palabras con split y le indico que la longitud tiene que ser mayor a 1 palabra
//     const librosConTituloLargo = libros.filter(libro => libro.titulo.split(" ").length > 1);
    
//     //extraer solo los que cumplen la condicion
//     const titulos = librosConTituloLargo.map(libro => libro.titulo);
    
//     console.log(titulos);
//     return titulos;
     
//     }
//     librosConPalabrasEnTitulo(libros);

// 7. Cálculos Estadísticos 
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto 
// Math para calcular y mostrar: 
// ✓ Promedio de años de publicación de los libros. 
// ✓ Año de publicación más frecuente. 
// ✓ Diferencia en años entre el libro más antiguo y el más nuevo. 
// Función para calcular y mostrar las estadísticas

// function calcularEstadisticas(libros) {
   
//     // Extraer los años de cada libro para poder en el paso siguiente reducir cada año
//    const anios = libros.map(libro => libro.anio);

//    // Calcular el promedio de años de publicación, creo otra variable y le aplico el Math.Floor para que redondee al entero mas cercano
//    const promedio = anios.reduce((sum, anio) => sum + anio, 0) / anios.length; 
//    const promedioAnios = Math.floor(promedio);
//    console.log(`El promedio de años es ${promedioAnios}`);

// // Calcular el año de publicación más frecuente
// // creo un objeto vacio para contar cuantas veces aparece cada año y recorro cada libro en el array y lo sumo a conteoAnios
// const conteoAnios = {};
// anios.forEach(anio => {
//     conteoAnios[anio] = (conteoAnios[anio] || 0) + 1;
// });


// en esta parte utilixo Math.max para determinar el año mayor y busque como objet.values que devuelve los valores del objeto conteoAnios y object.keys que devuelve las claves de conteoAnios
// const maxFrecuencia = Math.max(...Object.values(conteoAnios));
// const aniosFrecuentes = Object.keys(conteoAnios).filter(anio => conteoAnios[anio] === maxFrecuencia); // filtro para que me devuelva un solo valor 
   
// console.log(`El año de publicacion mas frecuente es: ${aniosFrecuentes}`);

  

// // Calcular la diferencia en años entre el libro más antiguo y el más nuevo
// const anioMinimo = Math.min(...anios);  // utilixo el operador de propagacion para que tome el array y lo haga una lista de elenemtos indiviaduales
// const anioMaximo = Math.max(...anios);
// const diferenciaAnios = anioMaximo - anioMinimo;
// console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios}`);
// }

// // Llamada a la función
// calcularEstadisticas(libros);


// // 8. Manejo de Cadenas
// // a) Crear una función normalizarDatos() que utilice métodos de strings 

// function normalizarDatos() {
//     // ✓ Convertir todos los títulos a mayúsculas.
//     // recorro con un for cada libro y entro en cada indice en la propiedad titulo y utilizo toUpperCase para convertir cada titulo en mayusculas
//        let mayuscula = [];
//         for (let i = 0; i < libros.length; i++) {
//            mayuscula =  libros[i] = libros[i].titulo.toUpperCase();
        
//         };
//         console.log("Titulos en MAYUSCULAS", libros);
//      // quitar espacios de los nombres de los autores
//     // ✓ Formatear los emails de los usuarios a minúsculas
//     for (let i = 0; i < usuarios.length; i++) {
//        usuarios[i] = usuarios[i].email.toLowerCase();
        
//     };
//     console.log("Mails en minusculas", usuarios);
    
//     }
    
//     normalizarDatos(libros);


// function buscarLibro(criterio, valor) {
//     let resultado =[];
//     //itero sobre el array de libros
//     for (let i = 0; i < libros.length; i++) {
       
//         //verifico que el criterio exista
//         if (criterio === valor) {
           
//         } else if (criterio === "titulo" && libros[i].titulo === valor) {
//             resultado.push(libros[i]);
//         } else if (criterio === "autor" && libros[i].autor === valor) {
//             resultado.push(libros[i]);
//         } else if (criterio === "genero" && libros[i].genero === valor) {
//              resultado.push(libros[i]);
//         } 
        
        
//         } 
//         // console.log(resultado);
// //si no lo encuentra
// return resultado;
    
// }
// console.log(buscarLibro("titulo", "Cien años de soledad"));
// console.log(buscarLibro("autor", "Orwell George"));
// console.log(buscarLibro("genero", "Drama"));


// function ordenarLibros(criterio){
//     let cantidadDeLibros = libros.length;
    
// for (let i = 0; i < cantidadDeLibros - 1; i++) {
//     for (let j = 0; j < cantidadDeLibros - i - 1; j++) {
//         if (libros[j][criterio] > libros[j + 1][criterio]){
//             [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
//         }
//     }
// } 
// console.log(libros);


// }
// ordenarLibros("anio");

// function borrarLibro(id) {
//     let indice = libros.findIndex(libro => libro.id === id); //encuentra el indice 
   
//     if (indice !== -1) {   //si el indice es diferente a -1. 
//         libros.splice(indice, 1); //el 1 indica cuantos elementos eliminar
//     } else {
//         console.log("Indice inexistente");
        
//     }
//     console.log(libros);
    
// }
// borrarLibro(10);

// let contadorIdUs = usuarios.length + 1;
// function registrarUsuario (id, nombre, email, librosPrestados){
//     // contadorIdUs++;
//     let nuevoUsuario = {id, nombre, email, librosPrestados};
//     usuarios.push(nuevoUsuario);
// };
// registrarUsuario(usuarios, contadorIdUs, "Melisa Esposito", "melisa.espo@gmail.com",[]);
// console.log(usuarios);

// function mostrarTodosLosUsuarios(usuarios) {
//     return console.log(usuarios);
// }


// console.log(mostrarTodosLosUsuarios(usuarios));

// function borrarUsuario(nombre, email) {
    
//     let verificar = usuarios.findIndex(usuario => usuario.nombre === nombre || usuario.email === email);
//     if (verificar !== -1) {   
//         usuarios.splice(verificar, 1); 
//         return usuarios;
//     } else {
//         console.log("Usuario inexistente");
        
//     }
    
    
// }
// console.log(borrarUsuario("Juan Perez"));

// function prestarLibro(idLibro, idUsuario) {
//     //Iterar en cada libro y cada usuario para encontrar el id igual al id ingresado.
//     let libro = libros.find(libro => libro.id === idLibro);
//     let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    
//     //verificar si el libro existe y esta disponible
//     if (libro && libro.disponible) {

//         //si está lo marcamos como no disponible y lo agregamos a usuarios.libros prestados
//         libro.disponible = false;
//         usuario.librosPrestados.push(idLibro);
//         console.log(`El libro ${libro.titulo} ha sido prestado a ${usuario.nombre}`);
        
//     } else{
//         console.log(`El libro ${idLibro} o el usuario ${idUsuario} no existen`);
        
//     }
// }
// // prestarLibro(10, 1);
// console.log(libros);
// console.log(usuarios);


function generarReporteLibros(libros) {

    // ✓ Cantidad total de libros. 
    let reporteTotalLibros = libros.reduce((total) => total + 1, 0);        
    // console.log(`La cantidad total es de : ${reporteTotalLibros} libros.`);
    
    // ✓ Cantidad de libros prestados. 
    let reporteLibrosPrestados = usuarios.reduce((total, usuario) => total + usuario.librosPrestados.length, 0);
    // console.log(`La cantidad de libros prestados es de ${reporteLibrosPrestados}`);
    
    // ✓ Cantidad de libros por género.
    
    // armo un array con los generos
    const generos = ["Fantasia", "Novela","Autoayuda", "Drama", "Clasico", "Ciencia Ficcion", "Cuentos"];
    
    let cantidadGenero = generos.map(genero =>{
        
        return {
            genero: genero,
            cantidad: libros.filter(libro => libro.genero === genero).length  // filtra cada genero y cuenta la cantidad por cada uno
        };
    
    })
    // console.log(cantidadGenero);
    // ✓ Libro más antiguo y más nuevo 
    // 
    let libroMasAntiguo = libros.reduce((antiguo, libro) => {    
       return (antiguo.anio < libro.anio) ? antiguo : libro;    
       
    });
    let libroMasNuevo = libros.reduce((nuevo, libro) =>{
        return (nuevo.anio > libro.anio) ? nuevo : libro;
    });
    
    return {
        
        totalDeLibros: reporteTotalLibros,
        librosPrestadosrestados: reporteLibrosPrestados,
        cantidadPorGenero: cantidadGenero,
        antiguo: libroMasAntiguo,
        nuevo: libroMasNuevo
    }
    }
    console.log(generarReporteLibros(libros));
    


function menuPrincipal() {
    while (true) {
        let opcion = parseInt(prompt(
            `Menú Principal : 
            1. Agregar libro
            2. Buscar libro
            3. Ordenar libro
            4. Borrar libro
            5. Registrar usuario 
            6. Mostrar total de usuarios
            7. Buscar usuario
            8. Borrar usuario
            9. Prestar libro
            10. Devolver libro
            11. Reportes
            12. Salir 
            Seleccione una opcion: `
        ));

        switch (opcion) {
            case 1: {
                const id = parseInt(prompt(`Ingrese el id: `));
                const titulo = prompt(`Ingrese el titulo: `);
                const autor = prompt(`Ingrese el autor`);
                const anio = prompt(`Ingrese el anio: `);
                const genero = prompt(`Ingrese el genero: `);
                agregarLibro(id, titulo, autor, anio, genero);
                console.log(libros);
                break;
            }
            case 2: {
                const criterio = prompt(`Ingrese busqueda por titulo, autor o genero: `);
                const valor = prompt(`Ingrese el nombre: `);
                console.log(buscarLibro(criterio, valor));
                break;
            }
            case 3: {
                const orden = prompt(`Ingrese si desea ordear por titulo o anio: `);
                console.log(ordenarLibros(orden));
                break;
            }
            case 4: {
                const borrarId = parseInt(prompt(`Ingrese el Id que desea borrar: `));
                borrarLibro(borrarId);
                console.log(borrarLibro(libros));
                break;
            }
            case 5: {
                const nombre = prompt(`Ingrese nombre de usuario: `);
                const email = prompt(`Ingrese el email: `);
                registrarUsuario(nombre, email);
                console.log(usuarios);
                break;
            }                
            case 6: {
                
                console.log(mostrarTodosLosUsuarios(usuarios));
                break;
            }                
            case 7: {
                const buscarEmail = prompt(`Ingrese el email que desea buscar: `);
                console.log(buscarUsuario(buscarEmail));
                break;
            }    
            case 8: {
                const BorrarEmail = prompt(`Ingrese email o nombre del usuario que desea borrar: `);
                borrarUsuario(BorrarEmail);
                console.log(usuarios);
                
                
                break;
            }    
            case 9: {
                const libroPrestar = parseInt(prompt(`Ingrese id de libro que desea prestar: `));
                const usuarioPrestar = parseInt(prompt(`Ingrese el id de usuario: `));
                console.log(prestarLibro(libroPrestar, usuarioPrestar));
                break;
            }   
            case 10: {
                const idADevolver = parseInt(prompt(`Ingrese id de libro que desea devolver: `));
                const usuarioDevolver = parseInt(prompt(`Ingrese el id de usuario: `));
                devolverLibro(idADevolver, usuarioDevolver);
                break;
            }   
            case 11: {
                
                console.log((usuarios));
                break;
            }
                        
            case 12: {
            console.log(`Salir del Menú...`);
            break;
            }                                                                   
            default:{
                console.log(`Opcion Inexistente, intentelo nuevamente!: `);
                break; 
            }
            
        }
    }   } while (opcion !== 12);
}
menuPrincipal();

