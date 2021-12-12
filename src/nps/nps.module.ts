import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NPSAccount } from './entities/nps.account.entity';
import { NPSController } from './nps.controller';
import { NPSService } from './nps.service';

@Module({
  imports: [TypeOrmModule.forFeature([NPSAccount])],
  providers: [NPSService],
  controllers: [NPSController]
})
export class NpsModule { }
