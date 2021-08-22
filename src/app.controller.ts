import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Unauthorized } from './authz/authz.filter';
import { SessionGuard } from './authz/session.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(SessionGuard)
  @UseFilters(Unauthorized)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
