// 1. Definición del Enum TipoHabitacion
export enum tipoHabitacion {
    Estandart = 35000,
    Suite = 450000,
    Premium = 650000
}


export type Reserva = [string, number, tipoHabitacion];



export class GestionDeReservas {
       private reservas: Reserva[] = [];

       agregarReserva(nombre: string, noches: number, tipo: tipoHabitacion): void{
            this.reservas.push([nombre, noches, tipo]);

       }
       listarReservas(): void {
        this.reservas.forEach(([nombre, noches, tipo]) => {
            console.log(`Huesped: ${nombre}, noches: ${noches}, Habitacion: ${tipoHabitacion[tipo]}, Precio por noche: ${tipo} `);
            
        });
       }
       calcularIngresoTotal(): number {
        return this.reservas.reduce((total, [_, noches, tipo]) => total + (noches * tipo), 0);
    }
    }




