export abstract class Veiculo {
    constructor(public modelo: string, public capacidade: number) {}
    abstract calcularConsumo(distancia: number): number;
    exibirDados(): void {
        console.log(`Modelo: ${this.modelo}, Capacidade: ${this.capacidade}`);
    }
}
