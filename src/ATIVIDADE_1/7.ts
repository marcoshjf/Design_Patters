interface Notificacao {
    enviar(mensagem: string): void;
}

class EmailNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

class SmsNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class PushNotificacao implements Notificacao {
    enviar(mensagem: string): void {
        console.log(`Enviando push notification: ${mensagem}`);
    }
}

class Usuario {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    receberNotificacao(notificacao: Notificacao, mensagem: string): void {
        console.log(`Usuário ${this.nome} recebendo notificação...`);
        notificacao.enviar(mensagem);
    }
}

// Teste do sistema
const usuario = new Usuario("Carlos");
const emailNotificacao = new EmailNotificacao();
const smsNotificacao = new SmsNotificacao();
const pushNotificacao = new PushNotificacao();

usuario.receberNotificacao(emailNotificacao, "Seu pedido foi enviado!");
usuario.receberNotificacao(smsNotificacao, "Você tem uma nova mensagem.");
usuario.receberNotificacao(pushNotificacao, "Atualização disponível para download.");
