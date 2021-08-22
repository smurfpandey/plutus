import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginGuard } from './login.guard';

@Controller('auth')
export class AuthzController {
  @Get('login')
  @UseGuards(LoginGuard)
  async login(@Req() req): Promise<any> {
    return;
  }

  @Get('callback')
  @UseGuards(LoginGuard)
  async callback(@Req() req): Promise<any> {
    return;
  }
}
