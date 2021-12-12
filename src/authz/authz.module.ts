import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/user.module';

import { AuthzController } from './authz.controller';
import { AuthzService } from './authz.service';
import { AuthzStrategy } from './authz.strategy';
import { SessionSerializer } from './session.serializer';


@Module({
  imports: [
    UsersModule,
    ConfigModule, HttpModule,
    PassportModule.register({ session: true, defaultStrategy: 'authz' })],
  providers: [AuthzStrategy, AuthzService, SessionSerializer],
  exports: [PassportModule],
  controllers: [AuthzController],

})
export class AuthzModule { }
