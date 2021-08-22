import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { AuthzController } from './authz.controller';
import { AuthzService } from './authz.service';
import { AuthzStrategy } from './authz.strategy';
import { SessionSerializer } from './session.serializer';


@Module({
  imports: [ConfigModule, HttpModule, PassportModule.register({ session: true, defaultStrategy: 'authz' })],
  providers: [AuthzStrategy, AuthzService, SessionSerializer],
  exports: [PassportModule],
  controllers: [AuthzController],

})
export class AuthzModule { }
