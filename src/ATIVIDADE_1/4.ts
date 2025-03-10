class Tarefa {
    private descricao: string;
    private concluida: boolean;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;
    }

    marcarConcluida(): void {
        this.concluida = true;
    }

    exibirDetalhes(): string {
        return `Tarefa: ${this.descricao} - Status: ${this.concluida ? "Concluída" : "Pendente"}`;
    }

    getDescricao(): string {
        return this.descricao;
    }
}

class GerenciadorTarefas {
    private tarefas: Tarefa[];

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao: string): void {
        const tarefa = new Tarefa(descricao);
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${descricao}" adicionada.`);
    }

    marcarConcluida(index: number): void {
        if (index >= 0 && index < this.tarefas.length) {
            this.tarefas[index].marcarConcluida();
            console.log(`Tarefa "${this.tarefas[index].getDescricao()}" marcada como concluída.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    exibirTarefas(): void {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.exibirDetalhes()}`);
        });
    }
}

// Teste do sistema
const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa("Estudar TypeScript");
gerenciador.adicionarTarefa("Fazer exercícios de POO");
gerenciador.exibirTarefas();
gerenciador.marcarConcluida(0);
gerenciador.exibirTarefas();
