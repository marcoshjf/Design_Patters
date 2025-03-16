export abstract class Pedido {
    constructor(public numero: number, public itens: { nome: string; preco: number }[]) {}
    abstract calcularTotal(): number;
    exibirDados(): void {
        console.log(`Pedido Nº: ${this.numero}, Itens: ${this.itens.map(item => item.nome).join(", ")}`);
    }
}