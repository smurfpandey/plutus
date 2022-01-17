
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { CreateNPSAccountDTO } from './dtos/create-nps-account.dto'
import { NPSAccount } from './entities/nps.account.entity';
import { NPSService } from './nps.service';

const PG_UNIQUE_CONSTRAINT_VIOLATION = '23505';

@Controller('api/nps')
export class NPSController {
  constructor(private readonly npsService: NPSService) {}

  @Get()
  async getNPS(@Req() req: Request): Promise<NPSAccount> {
    const npsAccount = await this.npsService.getNPSAccountOfUser(req.user['id']);

    if(!npsAccount) {
      throw new HttpException('No account found for the logged in user', HttpStatus.NOT_FOUND);
    }

    return npsAccount;
  }

  @Post()
  async create(@Req() req: Request, @Body() createNPSDTO: CreateNPSAccountDTO): Promise<NPSAccount> {
    try {
      return await this.npsService.createNPSAccount(createNPSDTO, req.user['id']);
    } catch (err) {
      if (err && err.code === PG_UNIQUE_CONSTRAINT_VIOLATION) {
        throw new HttpException('Provided pran already exists in the system', HttpStatus.BAD_REQUEST);
      } else {
        throw err;
      }
    }
  }

  @Post(':id')
  async update(@Req() req: Request, @Param('id') id: string, @Body() createNPSDTO: CreateNPSAccountDTO): Promise<NPSAccount> {
    try {
      return await this.npsService.updateNPSAccount(createNPSDTO, req.user['id'], id);
    } catch (err) {
      throw err;
    }
  }
 }
