import { Funcionario } from "./Funcionario";
export class Terceirizado extends Funcionario {
    constructor(nome: string, salario: number, cargo: string, private custoProjeto: number) {
        super(nome, salario, cargo);
    }
    calcularVencimentos(): number {
        return this.salario + this.custoProjeto;
    }
}