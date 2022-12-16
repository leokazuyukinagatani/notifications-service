import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { NotificationsRespository } from '@application/repositories/notifications-respository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRespository {
  constructor(private prismaService: PrismaService) {}
  async findById(notification: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({ data: raw });
  }
  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
