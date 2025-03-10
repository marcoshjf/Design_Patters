interface MetodoPagamento {
    pagar(valor: number): void;
}

class CartaoCredito implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado com cartão de crédito.`);
    }
}

class PayPal implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado via PayPal.`);
    }
}

class Boleto implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado com boleto.`);
    }
}

class Compra {
    private valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    realizarPagamento(metodo: MetodoPagamento): void {
        console.log("Processando pagamento...");
        metodo.pagar(this.valor);
    }
}

// Teste do sistema
const compra = new Compra(150.75);
const cartao = new CartaoCredito();
const paypal = new PayPal();
const boleto = new Boleto();

compra.realizarPagamento(cartao);
compra.realizarPagamento(paypal);
compra.realizarPagamento(boleto);
