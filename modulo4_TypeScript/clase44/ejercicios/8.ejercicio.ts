// Actividad 8: Clase genérica con iteración 
 
// Crea una clase genérica llamada Coleccion que acepte un tipo genérico T. Esta 
// clase debe tener:
// 1. Un arreglo privado donde se almacenan los elementos.
// 2. Un método agregar que permita añadir un nuevo elemento.
// 3. Un método recorrer que use un bucle for...of para iterar sobre los 
// elementos y aplicar una función pasada por parámetro.
// Utiliza esta clase para almacenar números y luego imprimir solo los valores 
// pares.

class Coleccion<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    recorrer(callback: (elemento: T) => void): void {
        for(const elemento of this.elementos) {
            callback(elemento);
            
        }
    }
}

export const numeros = new Coleccion<number>();
  
  numeros.agregar(1);
  numeros.agregar(2);
  numeros.agregar(3);
  numeros.agregar(4);
  numeros.agregar(5);
  numeros.agregar(10);

  numeros.recorrer((num) => {
    if (num % 2 === 0) {
      console.log(num); // 2, 4
    }
  });