import { Conta } from "./Conta";
export class ContaPoupanca extends Conta {
    constructor(numero: string, saldo: number, private juros: number) {
        super(numero, saldo);
    }
    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
    aplicarJuros(): void {
        this.saldo += this.saldo * this.juros;
    }
}