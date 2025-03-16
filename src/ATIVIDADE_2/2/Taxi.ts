import { Veiculo } from "./Veiculo";
export class Taxi extends Veiculo {
    constructor(modelo: string, capacidade: number, private tarifaPorKm: number) {
        super(modelo, capacidade);
    }
    calcularConsumo(distancia: number): number {
        return this.tarifaPorKm * distancia;
    }
}