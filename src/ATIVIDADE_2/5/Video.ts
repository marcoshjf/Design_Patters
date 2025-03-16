import { Publicacao } from "./Publicacao";
export class Video extends Publicacao {
    constructor(titulo: string, autor: string) {
        super(titulo, autor);
    }
    obterDescricao(): string {
        return `Video: ${this.titulo}, Autor: ${this.autor}`;
    }
}