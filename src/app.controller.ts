import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SessionGuard } from './authz/session.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(SessionGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
