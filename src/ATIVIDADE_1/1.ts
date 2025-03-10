export class Retangulo {
    private largura: number;
    private altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    exibirArea(): void {
        console.log(`A área do retângulo é: ${this.calcularArea()}`);
    }
}

const retangulo = new Retangulo(10, 5);
retangulo.exibirArea(); // Saída: A área do retângulo é: 50
