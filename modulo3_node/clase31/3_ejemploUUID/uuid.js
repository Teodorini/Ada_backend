// Instalar la libreria npm install uuid
// Importar los diferentes versiones de uuid
const {v1: uuid1, v3: uuid3, v4: uuid4, v5: uuid5} = require(`uuid`);

// 1- UUID1 basado en tiempo

const idV1= uuid1();
console.log(`UUID1 V1 (Basado en tiempo:)`, idV1);
// imprime UUID1 V1 (Basado en tiempo:) a47a40d0-67bd-11ef-a82c-931a17f44943

// 2- UUID3 BASADO EN NOMBRE Y ESPACIO DE NOMBRE
const NAMESPACE = uuid3.URL; //Espacio de nombre estandar basado en la url
const nameV3 = "Marian";
const idV3 = uuid3(nameV3, NAMESPACE);
console.log(`UUID V3 (basado en nombre y espacio de nombre)`, idV3);
// Imprime: UUID3 (basado en nombre y espacio de nombre) 76029dcd-bc52-34bf-a403-b0be0c00eed2

//3- UUID4 Aleatorio
const idv4 = uuid4();
console.log(`UUID V4 (aleatorio): `, idv4);
// Imprime UUID v4 (aleatorio):  f7cca94c-dda9-4967-a2d3-ec05848396d7

// 4- UUID5 - BASADO EN NOMBRE Y ESPACIO DE NOMBRE (CON SHA-1)
const nameV5 = `Chicas Back`;
const idV5 = uuid5(nameV5, NAMESPACE);
console.log(`UUID V5 (Basado en nombre y espacio de nombre con SHA-1)`, idV5);
// Imprime: UUID V5 (Basado en nombre y espacio de nombre con SHA-1) 2b9fe148-21c7-5b2a-a4d7-f949260892a7



