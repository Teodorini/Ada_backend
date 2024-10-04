// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
// función debe retornar el área de la figura. Usa tipos específicos para cada caso.

function calcularArea(figura: "circulo" | "rectangulo", ...valores: number[]): number {
    if (figura === "circulo") {
      const radio = valores[0];
      return Math.PI * Math.pow(radio, 2);
    } else if (figura === "rectangulo") {
      const largo = valores[0];
      const ancho = valores[1];
      return largo * ancho;
    } else {
      throw new Error("Figura no válida");
    }
  }
  
  console.log(`El área del círculo es: ${calcularArea("circulo", 5)}`); // El área del círculo es: 78.5398...
  console.log(`El área del rectángulo es: ${calcularArea("rectangulo", 5, 10)}`); // El área del rectángulo es: 50