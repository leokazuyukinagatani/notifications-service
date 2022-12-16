import { Notification } from "@application/entities/notification";
import { NotificationsRespository } from "@application/repositories/notifications-respository";



export class InMemoryNotificationsRepository implements NotificationsRespository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
};