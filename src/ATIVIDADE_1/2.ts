class ListaDeTarefas {
    private tarefas: string[];

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa: string): void {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada.`);
    }

    listarTarefas(): void {
        console.log("Lista de Tarefas:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    }

    removerTarefa(index: number): void {
        if (index >= 0 && index < this.tarefas.length) {
            const tarefaRemovida = this.tarefas.splice(index, 1)[0];
            console.log(`Tarefa "${tarefaRemovida}" removida.`);
        } else {
            console.log("Índice inválido.");
        }
    }
}

const lista = new ListaDeTarefas();
lista.adicionarTarefa("Estudar TypeScript");
lista.adicionarTarefa("Fazer exercícios de POO");
lista.listarTarefas();
lista.removerTarefa(0);
lista.listarTarefas();