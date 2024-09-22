// Este archivo contiene funciones para formatear las respuestas. convierte los datos en el formato que pide cada una. 
//convierte todos los datos en Json

const responseView = {
  formatResponse: (data) => {
      return JSON.stringify(data, null, 2)
  }
};
module.exports = responseView;
  
 
  