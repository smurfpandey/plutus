import { Get, Controller, Render, Req, UseFilters, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';
import { Unauthorized } from './authz/authz.filter';
import { SessionGuard } from './authz/session.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseFilters(Unauthorized)
  @Get()
  @Render('index')
  root(@Req() req: Request) {
    return { message: 'Hello world!', user: JSON.stringify(req.user) };
  }
}
