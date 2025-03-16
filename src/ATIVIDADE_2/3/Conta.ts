export abstract class Conta {
    constructor(public numero: string, public saldo: number) {}
    abstract sacar(valor: number): void;
    exibirDados(): void {
        console.log(`Conta: ${this.numero}, Saldo: ${this.saldo}`);
    }
}