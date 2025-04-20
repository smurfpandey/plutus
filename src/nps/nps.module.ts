import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NPSAccount } from './entities/nps.account.entity';
import { NPSScheme } from './entities/nps.scheme.entity';
import { NPSTransaction } from './entities/nps.transaction.entity';
import { NPSController } from './nps.controller';
import { NPSService } from './nps.service';

@Module({
  imports: [TypeOrmModule.forFeature([NPSAccount, NPSScheme, NPSTransaction])],
  providers: [NPSService],
  controllers: [NPSController]
})
export class NpsModule { }
