// Ejercicio 6: Encapsulamiento en clases
// Crea una clase CuentaBancaria que tenga atributos privados como saldo y un 
// método público para consultar el saldo y otro para depositar dinero.

class CuentaBancaria {
    private saldo: number;
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }

    public consultarSaldo(): number {
        return this.saldo
    }

    public depositar(billete: number): void {
        if(billete > 0) {
            this.saldo += billete
        }
    }
}

const miCuenta = new CuentaBancaria(1000);
console.log(miCuenta.consultarSaldo()); // Resultado: 1000
miCuenta.depositar(500);
console.log(miCuenta.consultarSaldo()); // Resultado: 1500
