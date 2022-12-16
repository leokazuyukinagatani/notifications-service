import { Notification } from '@application/entities/notification';
import { NotificationsRespository } from '@application/repositories/notifications-respository';

export class InMemoryNotificationsRepository
  implements NotificationsRespository
{
  public notifications: Notification[] = [];
  
  async findById(notification: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
