import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpException, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RavenModule, RavenInterceptor } from 'nest-raven';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthzModule } from './authz/authz.module';
import { NpsModule } from './nps/nps.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(), AuthzModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}']
      }),
      inject: [ConfigService],
    }),
    NpsModule,
    RavenModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useValue: new RavenInterceptor({
      filters: [
          // Filter exceptions of type HttpException. Ignore those that
          // have status code of less than 500
          { type: HttpException, filter: (exception: HttpException) => 500 > exception.getStatus() }
      ],
    }),
  },],
})
export class AppModule { }
