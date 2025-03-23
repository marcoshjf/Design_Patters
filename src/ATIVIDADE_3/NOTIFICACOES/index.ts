import { NotificationFactory, NotificationType } from './NotificationFactory';

const email = NotificationFactory.createNotification(NotificationType.EMAIL);
email.send("Você recebeu um e-mail!");

const sms = NotificationFactory.createNotification(NotificationType.SMS);
sms.send("Você recebeu um SMS!");
