import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
