import { Publicacao } from "./Publicacao";
export class Artigo extends Publicacao {
    constructor(titulo: string, autor: string) {
        super(titulo, autor);
    }
    obterDescricao(): string {
        return `Artigo: ${this.titulo}, Autor: ${this.autor}`;
    }
}