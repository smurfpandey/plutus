import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/user.module';

import { AuthzController } from './authz.controller';
import { AuthzService } from './authz.service';
import { AuthzStrategy } from './authz.strategy';
import { SessionGuard } from './session.guard';
import { SessionSerializer } from './session.serializer';


@Module({
  imports: [
    UsersModule,
    ConfigModule, HttpModule,
    PassportModule.register({ session: true, defaultStrategy: 'authz' })],
  providers: [AuthzStrategy, AuthzService, SessionSerializer, {
    provide: APP_GUARD,
    useClass: SessionGuard,
  },],
  exports: [PassportModule],
  controllers: [AuthzController],

})
export class AuthzModule { }
