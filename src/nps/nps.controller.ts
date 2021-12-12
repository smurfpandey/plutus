
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateNPSAccountDTO } from './dtos/create-nps-account.dto'
import { NPSAccount } from './entities/nps.account.entity';
import { NPSService } from './nps.service';

const PG_UNIQUE_CONSTRAINT_VIOLATION = '23505';

@Controller('api/nps')
export class NPSController {
  constructor(private readonly npsService: NPSService) {}

  @Post()
  async create(@Body() createNPSDTO: CreateNPSAccountDTO): Promise<NPSAccount> {
    try {
      return await this.npsService.createNPSAccount(createNPSDTO);
    } catch (err) {
      if (err && err.code === PG_UNIQUE_CONSTRAINT_VIOLATION) {
        throw new HttpException('Provided pran already exists in the system', HttpStatus.BAD_REQUEST);
      } else {
        throw err;
      }
    }
  }
 }
