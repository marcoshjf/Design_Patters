class Conta {
    private numero: number;
    private saldo: number;

    constructor(numero: number, saldoInicial: number) {
        this.numero = numero;
        this.saldo = saldoInicial;
        console.log(`Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`);
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado na conta ${this.numero}. Novo saldo: R$${this.saldo}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo da conta ${this.numero}: R$${this.saldo}.`);
    }
}

class Banco {
    private contas: Conta[];

    constructor() {
        this.contas = [];
    }

    criarConta(numero: number, saldoInicial: number): Conta {
        const conta = new Conta(numero, saldoInicial);
        this.contas.push(conta);
        return conta;
    }
}

const banco = new Banco();
const conta123 = banco.criarConta(123, 1000);
conta123.depositar(500);
conta123.sacar(200);
conta123.consultarSaldo();
