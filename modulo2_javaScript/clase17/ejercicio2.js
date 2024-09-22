let list = [12, 3, 5, 7, 1, 22, 47, 100];
//Buble sort ordena de menor a mayor
for (let i= 0; i < list.length; i++) {
    for (let j = 0; j < list.length -1; j++) {
     // condicion si es mayor se intercambian
        if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
     }
    }
}
let listaOrdenada = list;
console.log(listaOrdenada);

const busquedaBinaria = (list, item) => {
    //Definimos punto alto y bajo
      let bajo = 0;
      let alto = list.length -1;  
  // condicion mientras bajo sea menor o igual que alto
  while (bajo <= alto) {
      //encontramos la mitad
      const mitad = Math.floor((bajo + alto) / 2);
      // adivinar si es mitad
      const adivinar = list[mitad];
      // si cumple retorna esa posicion
      if (adivinar === item) {
          return mitad;
      }
      //si es mayor a lo q buscamos
      if (adivinar > item) {
          alto = mitad -1;
      } else {
          bajo = mitad + 1;
      }
  }
      return null; // si no encuentra
  };
  let busqueda12 = 12;
  console.log(`El numero ${busqueda12} se encuentra en la posicion ${busquedaBinaria(list, busqueda12)} `);
  let busqueda5 = 5;
  console.log(`El numero ${busqueda5} se encuentra en la posicion ${busquedaBinaria(list, busqueda5)}`);
  let busqueda22 = 22;
  console.log(`El numero ${busqueda22} se encuentra en la posicion ${busquedaBinaria(list, busqueda22)}`);
  let busqueda100 = 100;
  console.log(`El numero ${busqueda100} se encuentra en la posicion ${busquedaBinaria(list, busqueda100)}`);