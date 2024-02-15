import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [PrismaModule, CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
