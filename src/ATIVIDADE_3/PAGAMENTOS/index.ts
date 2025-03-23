interface Payment {
    processPayment(amount: number): void;
  }
  
  class CreditCardPayment implements Payment {
    processPayment(amount: number): void {
      console.log(`Pagamento de R$${amount.toFixed(2)} processado com cartão de crédito.`);
    }
  }
  
  class PayPalPayment implements Payment {
    processPayment(amount: number): void {
      console.log(`Pagamento de R$${amount.toFixed(2)} processado via PayPal.`);
    }
  }
  
  class BoletoPayment implements Payment {
    processPayment(amount: number): void {
      console.log(`Pagamento de R$${amount.toFixed(2)} processado com boleto bancário.`);
    }
  }
  
  enum PaymentType {
    CreditCard = "creditcard",
    PayPal = "paypal",
    Boleto = "boleto"
  }
  
  class PaymentFactory {
    static createPayment(type: PaymentType): Payment {
      switch (type) {
        case PaymentType.CreditCard:
          return new CreditCardPayment();
        case PaymentType.PayPal:
          return new PayPalPayment();
        case PaymentType.Boleto:
          return new BoletoPayment();
        default:
          throw new Error("Tipo de pagamento inválido.");
      }
    }
  }
  
  // EXEMPLO DE USO:
  const selectedPaymentType: PaymentType = PaymentType.PayPal;
  const paymentMethod: Payment = PaymentFactory.createPayment(selectedPaymentType);
  paymentMethod.processPayment(199.99);
  