Proyecto de Gestión de Libros

Objetivo:
Este proyecto es una aplicación de gestión de libros basada en TCP que permite gestionar libros, autores y editoriales a través de un servidor TCP y un cliente.

Estructura del Proyecto

server.js: Configura y ejecuta el servidor TCP.
client.js: Implementa el cliente que se conecta al servidor y permite enviar comandos.

controllers/:
booksController.js: Controlador para manejar operaciones con libros.
authorsController.js: Controlador para manejar operaciones con autores.
publishersController.js: Controlador para manejar operaciones con editores.

models/:
authorModel.js: Modelo de datos para los autores.
booksModel.js: Modelo de datos para los libros.
publisherModel.js: Modelo de datos para los editores.

views/:
responseView.js: Funciones para formatear respuestas.

data/:
books.json: Archivo JSON con datos de libros.
authors.json: Archivo JSON con datos de autores.
publishers.json: Archivo JSON con datos de editores.

Configuración
Requisitos
-Node.js (v14 o superior)
-npm.

Ejecución:

1. Navega hasta la carpeta deseada
cd integrador_Teodorini/
cd book-api/

2. Inicia el servidor
node server.js
Mensaje: TCP server escuchando en el puerto 8080

3. Inicia el cliente
node client.js
Mensaje del lado del servidor: Cliente conectado
Mensaje del lado del cliente: Conectado al servidor
Escribe un comando: Comandos disponibles:
GET BOOKS, 
ADD BOOK,
GET AUTHORS,
ADD AUTHOR,
GET PUBLISHERS,
ADD PUBLISHER, 
SEARCH AUTHOR

Escribe un comando: 

Uso
Una vez que el servidor esté en ejecución, puedes enviar comandos TCP desde el cliente para interactuar con el sistema. Aquí tienes algunos ejemplos de comandos que puedes enviar al servidor y las respuestas esperadas:

Ejemplos de Comandos

1. GET BOOKS (Obtener todos los libros): 

Escribe un comando: GET BOOKS

Respuesta:
[
  {
    "id": "b6021148-6864-4028-b6ac-066f65bb6694",
    "title": "Clinica Psicoanalitica",
    "author": "Silvia Tomas",
    "publisher": "Letra Viva",
    "authorNacionalidad": "Española"
  },
  {
    "id": "8c9b123d-cde2-45a0-8ce7-006d865be87d",
    "title": "Historias de Divan",
    "author": "Gabriel Rolon",
    "publisher": "Editorial Planeta",
    "authorNacionalidad": "Argentina"
  }
]

2. ADD BOOK (Agregar un libro):

Escribe un comando: ADD BOOK
 Agrega un libro:
 Ejemplo: {"title": "name", "author": "name", "publisher": "name", "authorNacionalidad": "nacionalidad"} 
 
Entrada de usuario: {"title": "Historias de Divan", "author": "Gabriel Rolon", "publisher": "Editorial Planeta","authorNacionalidad": "Argentina" }

Respuesta: 
{
  "message": "Book agregado con exito"
}

3. GET AUTHORS (obtener todos los autores)

Escribe un comando: GET AUTHORS

Respuesta: 
[
  {
    "id": "3a3d61d8-fb18-456b-b71a-7d9838d0ae5f",
    "name": "Silvia Tomas",
    "nacionalidad": "Española"
  },
  {
    "id": "27bf459b-21a0-45b9-9296-d48597902d19",
    "name": "Gabriel Rolon",
    "nacionalidad": "Argentina"
  }
]

4. ADD AUTHOR (Agregar un autor)

Escribe un comando: ADD AUTHOR
Agrega un autor:
Ejemplo: {"author": "name", "authorNacionalidad: "nacionalidad"}

Entrada del Usuario: {"author": "Gabriel Garcia Marquez", "authorNacionalidad": "Colombiana"} 

Respuesta: 
{
  "message": "Author agregado con exito"
}

5. GET PUBLISHERS (Obtener todas las editoriales)

Escribe un comando: GET PUBLISHERS

respuesta: 
[
  {
    "id": "47c206b7-138e-4bfd-9e9c-9ac06923b983",
    "publisher": "Letra Viva"
  },
  {
    "id": "d22259b4-1cbc-460f-a789-fc527f89d559",
    "publisher": "Editorial Planeta"
  }
]

6. ADD PUBLISHER (Agregar una editorial)

Escribe un comando: ADD PUBLISHER

Agrega una editorial:
Ejemplo: {"publisher": "name"}

Entrada del usuario: {"publisher": "Editorial Sudamericana"}

Respuesta: 
{
  "message": "Editorial agregada con exito"
}

7. SEARCH AUTHOR (Buscar author por NAME o Nacionalidad)
Entrada:
Escribe un comando: SEARCH AUTHOR
Respuesta:
Buscar por NAME/NACIONALIDAD: 
Entrada: NAME
Respuesta:
Buscar un autor por NAME:
Ejemplo: Silvia Tomas o Española :
Entrada: Gabriel Rolon
Respuesta:
[
  {
    "id": "27bf459b-21a0-45b9-9296-d48597902d19",
    "name": "Gabriel Rolon",
    "nacionalidad": "Argentina"
  }
]
Buscar por nacionalidad:
Escribe un comando: SEARCH AUTHOR
Buscar por NAME/NACIONALIDAD: NACIONALIDAD
Buscar un autor por NACIONALIDAD:
Ejemplo: Silvia Tomas o Española : Argentina
Enviando comando:  SEARCH AUTHOR NACIONALIDAD Argentina
[
  {
    "id": "27bf459b-21a0-45b9-9296-d48597902d19",
    "name": "Gabriel Rolon",
    "nacionalidad": "Argentina"
  }
]

Descripcion final

El sistema implementa un servidor TCP que gestiona la información de libros, autores y editoriales. Se puede interactuar con el servidor mediante un cliente de línea de comandos. Las funcionalidades incluyen la adición de nuevos datos y la búsqueda de autores.

Espero que encuentre el proyecto bien documentado y funcional.

Gracias por su atención.

Atentamente,
[Mariana Teodorini]







