export abstract class Publicacao {
    constructor(public titulo: string, public autor: string) {}
    abstract obterDescricao(): string;
    exibirDados(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}