import { GestionDeReservas, tipoHabitacion } from "./reservas";

const sistemaDeReservas = new GestionDeReservas;

sistemaDeReservas.agregarReserva("Juan", 3, tipoHabitacion.Estandart);
sistemaDeReservas.agregarReserva("Pedro", 6, tipoHabitacion.Premium);
sistemaDeReservas.agregarReserva("Melisa", 7, tipoHabitacion.Suite);

sistemaDeReservas.listarReservas();

console.log(`Ingreso total: ${sistemaDeReservas.calcularIngresoTotal()}`);
