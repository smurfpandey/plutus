import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateNPSAccountDTO } from './dtos/create-nps-account.dto';
import { NPSAccount } from './entities/nps.account.entity';

@Injectable()
export class NPSService {
  constructor(
    @InjectRepository(NPSAccount)
    private npsAccountRepository: Repository<NPSAccount>,
  ) { }

  createNPSAccount(createNPSDto: CreateNPSAccountDTO, userId: string): Promise<NPSAccount> {
    const npsAccount = new NPSAccount();
    npsAccount.pran = createNPSDto.pran;
    npsAccount.subscriberName = createNPSDto.subscriberName;
    npsAccount.returnEarned = createNPSDto.returnEarned;
    npsAccount.totalContribution = createNPSDto.totalContribution;
    npsAccount.totalValue = createNPSDto.totalValue;
    npsAccount.intermediaryCharges = createNPSDto.intermediaryCharges;

    const user = new UserEntity();
    user.id = userId;
    npsAccount.user = user;

    return this.npsAccountRepository.save(npsAccount);
  }

  getNPSAccountOfUser(userId: string): Promise<NPSAccount> {
    return this.npsAccountRepository.findOne({ where: { user: { id: userId }}});
  }

  getOneAccount(id: string): Promise<NPSAccount> {
    return this.npsAccountRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.npsAccountRepository.delete(id);
  }
}
