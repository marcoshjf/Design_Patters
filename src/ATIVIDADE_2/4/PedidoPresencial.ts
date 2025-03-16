import { Pedido } from "./Pedido";
export class PedidoPresencial extends Pedido {
    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }
}