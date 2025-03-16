import { Funcionario } from "./Funcionario";
export class Efetivo extends Funcionario {
    constructor(nome: string, salario: number, cargo: string, private bonus: number) {
        super(nome, salario, cargo);
    }
    calcularVencimentos(): number {
        return this.salario + this.bonus;
    }
}