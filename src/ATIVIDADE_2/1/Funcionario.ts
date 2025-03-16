export abstract class Funcionario {
    constructor(public nome: string, public salario: number, public cargo: string) {}
    abstract calcularVencimentos(): number;
    exibirDados(): void {
        console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: ${this.salario}`);
    }
}