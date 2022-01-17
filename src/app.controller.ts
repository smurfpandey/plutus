import { Get, Controller, Render, Req, UseFilters, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';
import { Unauthorized } from './authz/authz.filter';
import { SessionGuard } from './authz/session.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/whoami')
  getUser(@Req() req: Request) {
    console.log('aaya idhar');
    return req.user;
  }

  @UseFilters(Unauthorized)
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
