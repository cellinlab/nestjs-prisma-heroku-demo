import {
  Injectable,
  OnApplicationShutdown,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  constructor() {
    super();
  }

  async onApplicationBootstrap() {
    await this.$connect();
  }

  async onApplicationShutdown(signal?: string) {
    await this.$disconnect();
  }
}
