import { Notification, EmailNotification, SMSNotification } from './Notification';

export enum NotificationType {
  EMAIL,
  SMS
}

export class NotificationFactory {
  static createNotification(type: NotificationType): Notification {
    switch (type) {
      case NotificationType.EMAIL:
        return new EmailNotification();
      case NotificationType.SMS:
        return new SMSNotification();
      default:
        throw new Error("Tipo de notificação inválido.");
    }
  }
}
