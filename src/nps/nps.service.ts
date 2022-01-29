import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { AddNPSSchemeDTO } from './dtos/add-nps-schemes.dto';
import { CreateNPSAccountDTO } from './dtos/create-nps-account.dto';
import { NPSAccount } from './entities/nps.account.entity';
import { AssetClass, NPSScheme, NPSTier } from './entities/nps.scheme.entity';

@Injectable()
export class NPSService {
  constructor(
    @InjectRepository(NPSAccount)
    private npsAccountRepository: Repository<NPSAccount>,

    @InjectRepository(NPSScheme)
    private npsSchemeRepository: Repository<NPSScheme>,
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

  async getSchemeAllocation(npsId: string): Promise<NPSScheme[]> {
    const arrSchemeAllocation = await this.npsSchemeRepository.find({ where: { nps: {id: npsId }}});

    if (arrSchemeAllocation.length === 0) {
      // get default allocation
      let npsScheme = new NPSScheme();

      npsScheme.id = "1";
      npsScheme.tier = NPSTier.TIERI;
      npsScheme.assetClass = AssetClass.E;
      npsScheme.allocationPercent = 0;

      arrSchemeAllocation.push(npsScheme);

      npsScheme = new NPSScheme();

      npsScheme.id = "2";
      npsScheme.tier = NPSTier.TIERI;
      npsScheme.assetClass = AssetClass.G;
      npsScheme.allocationPercent = 0;

      arrSchemeAllocation.push(npsScheme);

      npsScheme = new NPSScheme();

      npsScheme.id = "3";
      npsScheme.tier = NPSTier.TIERI;
      npsScheme.assetClass = AssetClass.C;
      npsScheme.allocationPercent = 0;

      arrSchemeAllocation.push(npsScheme);

      npsScheme = new NPSScheme();

      npsScheme.id = "4";
      npsScheme.tier = NPSTier.TIERI;
      npsScheme.assetClass = AssetClass.A;
      npsScheme.allocationPercent = 0;

      arrSchemeAllocation.push(npsScheme);
    }
    return arrSchemeAllocation;
  }

  async saveSchemeAllocation(npsId: string, addNPSSchemeDTO: AddNPSSchemeDTO): Promise<NPSScheme[]> {
    let arrSchemeAllocation: NPSScheme[] = [];

    const nps = new NPSAccount();
    nps.id = npsId;

    console.log(addNPSSchemeDTO);

    addNPSSchemeDTO.schemes.forEach((scheme) => {
      const asset = new NPSScheme();

      if (scheme.id) { asset.id = scheme.id; }

      asset.allocationPercent = scheme.allocationPercent;
      asset.assetClass = scheme.assetClass;
      asset.fundManager = scheme.fundManager;
      asset.nps = nps;
      asset.tier = scheme.tier;
      asset.totalContribution = scheme.totalContribution;
      asset.totalUnits = scheme.totalUnits;

      arrSchemeAllocation.push(asset);
    });

    return this.npsSchemeRepository.save(arrSchemeAllocation);
  }
}
