import { Pedido } from "./Pedido";
export class PedidoDelivery extends Pedido {
    constructor(numero: number, itens: { nome: string; preco: number }[], private taxaEntrega: number) {
        super(numero, itens);
    }
    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0) + this.taxaEntrega;
    }
}