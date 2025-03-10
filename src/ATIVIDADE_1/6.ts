class Produto {
    private nome: string;
    private preco: number;
    private quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    atualizarPreco(novoPreco: number): void {
        this.preco = novoPreco;
        console.log(`Preço do produto "${this.nome}" atualizado para R$${this.preco.toFixed(2)}.`);
    }

    adicionarEstoque(quantidade: number): void {
        this.quantidadeEmEstoque += quantidade;
        console.log(`Foram adicionadas ${quantidade} unidades ao estoque de "${this.nome}".`);
    }

    removerEstoque(quantidade: number): void {
        if (quantidade > this.quantidadeEmEstoque) {
            console.log(`Não é possível remover ${quantidade} unidades. Estoque insuficiente de "${this.nome}".`);
        } else {
            this.quantidadeEmEstoque -= quantidade;
            console.log(`Foram removidas ${quantidade} unidades do estoque de "${this.nome}".`);
        }
    }

    exibirDetalhes(): void {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Estoque: ${this.quantidadeEmEstoque} unidades`);
    }
}

class CadastroProdutos {
    private produtos: Produto[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(nome: string, preco: number, quantidade: number): void {
        const produto = new Produto(nome, preco, quantidade);
        this.produtos.push(produto);
        console.log(`Produto "${nome}" cadastrado com sucesso.`);
    }

    atualizarPreco(nome: string, novoPreco: number): void {
        const produto = this.produtos.find(p => p["nome"] === nome);
        if (produto) {
            produto.atualizarPreco(novoPreco);
        } else {
            console.log(`Produto "${nome}" não encontrado.`);
        }
    }

    exibirRelatorio(): void {
        console.log("Relatório de Produtos:");
        this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}


const cadastro = new CadastroProdutos();
cadastro.adicionarProduto("Notebook", 3500, 10);
cadastro.adicionarProduto("Mouse", 150, 50);
cadastro.exibirRelatorio();
cadastro.atualizarPreco("Notebook", 3300);
cadastro.exibirRelatorio();
