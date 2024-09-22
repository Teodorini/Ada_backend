let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map((horario) => horario + 1);

// Añadir un nuevo horario al principio de la lista: Usamos unshift para agregar el horario 10 al principio. /
horariosAtrasados.unshift(10);

// Eliminar el último horario de la lista: Usamos pop para eliminar el último horario y lo guardamos en ultimoHorario
let ultimoHorario = horariosAtrasados.pop();

// Verificar si el horario 14 está en la lista y agregarlo al final si no está presente: Usamos includes para verificar si 14 está en la lista y push para agregarlo si no está. /
!horariosAtrasados.includes(14) ? horariosAtrasados.push(14) : "";

// Encontrar la posición del horario 18 y eliminarlo si está presente: Usamos indexOf para encontrar la posición de 18 y splice para eliminarlo si está presente. /
let buscar18 = horariosAtrasados.indexOf(18);
horariosAtrasados.splice(buscar18, -1);

//Añadir el horario eliminado en el paso 2 al final de la nueva lista de horarios atrasados: Usamos push para agregar el ultimoHorario (adelantado una hora) al final de horariosAtrasados. /
horariosAtrasados.push(ultimoHorario);

// Mostrar la lista final de horarios atrasados: Mostramos la lista por consola.
console.log(horariosAtrasados);

// Eliminar el primer elemento de la lista de horarios atrasados: Usamos shift para eliminar el primer elemento
horariosAtrasados.shift();

// Verificar si el horario 9 está en la lista y agregarlo al principio si no está presente: Usamos includes para verificar si 9 está en la lista y unshift para agregarlo si no está. */
!horariosAtrasados.includes(9) ? horariosAtrasados.unshift(9) : "";

// Por último, mostrar la lista final después de todas las operaciones
console.log(horariosPartida);
console.log(horariosAtrasados);


