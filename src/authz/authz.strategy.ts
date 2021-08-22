import { HttpService } from '@nestjs/axios';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-oauth2';

import { AuthzService } from './authz.service';

@Injectable()
export class AuthzStrategy extends PassportStrategy(Strategy, 'authz') {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly authService: AuthzService,
  ) {
    super({
      authorizationURL: configService.get<string>('AUTH0_BASE_URL') + '/authorize',
      tokenURL: configService.get<string>('AUTH0_BASE_URL') + '/oauth/token',
      clientID: configService.get<string>('AUTH0_CLIENT_ID'),
      clientSecret: configService.get<string>('AUTH0_CLIENT_SECRET'),
      callbackURL: configService.get<string>('AUTH0_CALLBACK_URL'),
      scope: 'openid profile email',
    })
  }

  async validate(idToken: string): Promise<any> {
    const { data } = await this.httpService.get(this.configService.get<string>('AUTH0_BASE_URL') + '/userinfo', {
      headers: { Authorization: `Bearer ${ idToken }` },
    })
    .toPromise();

    return data;
  }
}
