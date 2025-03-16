import { Veiculo } from "./Veiculo";
export class Onibus extends Veiculo {
    constructor(modelo: string, capacidade: number, private consumoPorKm: number) {
        super(modelo, capacidade);
    }
    calcularConsumo(distancia: number): number {
        return this.consumoPorKm * distancia;
    }
}