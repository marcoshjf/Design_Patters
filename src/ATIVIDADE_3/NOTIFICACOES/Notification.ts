export abstract class Notification {
    abstract send(message: string): void;
  }
  
  export class EmailNotification extends Notification {
    send(message: string): void {
      console.log(`Enviando e-mail: ${message}`);
    }
  }
  
  export class SMSNotification extends Notification {
    send(message: string): void {
      console.log(`Enviando SMS: ${message}`);
    }
  }
  