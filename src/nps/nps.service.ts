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
    npsAccount.lastValuationDate = createNPSDto.lastValuationDate;

    const user = new UserEntity();
    user.id = userId;
    npsAccount.user = user;

    return this.npsAccountRepository.save(npsAccount);
  }

  async updateNPSAccount(createNPSDTO: CreateNPSAccountDTO, userId: string, npsId: string): Promise<NPSAccount> {
    const npsAccount: NPSAccount = await this.getOneAccount(npsId);

    if (!npsAccount) {
      return undefined;
    }

    npsAccount.pran = createNPSDTO.pran;
    npsAccount.subscriberName = createNPSDTO.subscriberName;
    npsAccount.returnEarned = createNPSDTO.returnEarned;
    npsAccount.totalContribution = createNPSDTO.totalContribution;
    npsAccount.totalValue = createNPSDTO.totalValue;
    npsAccount.intermediaryCharges = createNPSDTO.intermediaryCharges;
    npsAccount.lastValuationDate = createNPSDTO.lastValuationDate;

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
