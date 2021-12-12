import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNPSAccountDTO } from './dtos/create-nps-account.dto';
import { NPSAccount } from './nps.account.entity';

@Injectable()
export class NPSService {
  constructor(
    @InjectRepository(NPSAccount)
    private npsAccountRepository: Repository<NPSAccount>,
  ) { }

  createNPSAccount(createNPSDto: CreateNPSAccountDTO): Promise<NPSAccount> {
    const npsAccount = new NPSAccount();
    npsAccount.pran = createNPSDto.pran;
    npsAccount.subscriberName = createNPSDto.subscriberName;
    npsAccount.returnEarned = createNPSDto.returnEarned;
    npsAccount.totalContribution = createNPSDto.totalContribution;
    npsAccount.totalValue = createNPSDto.totalValue;
    npsAccount.intermediaryCharges = createNPSDto.intermediaryCharges;

    return this.npsAccountRepository.save(npsAccount);
  }

  getAllNPSAccounts(): Promise<NPSAccount[]> {
    return this.npsAccountRepository.find();
  }

  getOneAccount(id: string): Promise<NPSAccount> {
    return this.npsAccountRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.npsAccountRepository.delete(id);
  }
}
