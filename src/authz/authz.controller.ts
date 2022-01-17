import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { LoginGuard } from './login.guard';
import { Public } from './session.guard';

@Controller('auth')
export class AuthzController {
  @Public()
  @Get('login')
  @UseGuards(LoginGuard)
  async login(@Req() req): Promise<any> {
    return;
  }

  @Public()
  @Get('callback')
  @UseGuards(LoginGuard)
  async callback(@Req() req, @Res() res): Promise<any> {
    return res.redirect('/');
  }

  @Get('logout')
  async logout(@Req() req, @Res() res): Promise<any> {
    req.logout();
    return res.redirect('/');
  }

  @Get('whoami')
  getUser(@Req() req: Request) {
    return req.user;
  }
}
