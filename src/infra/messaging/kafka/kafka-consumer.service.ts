import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['sharp-man-6930-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'c2hhcnAtbWFuLTY5MzAkUbxZ8NqehdjZ-_EWb7y_U4fh1D6bCnnK6rqSbr7n3P0',
          password:
            'oCFNthIzbjZZS9cI1_d6SE_x5N3dDXJQ6thCsXtFMFzVo6x3DCGXR0FBsu7Ie7u_RQm_jA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
