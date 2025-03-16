import { Conta } from "./Conta";
export class ContaCorrente extends Conta {
    constructor(numero: string, saldo: number, private chequeEspecial: number) {
        super(numero, saldo);
    }
    sacar(valor: number): void {
        if (valor <= this.saldo + this.chequeEspecial) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}