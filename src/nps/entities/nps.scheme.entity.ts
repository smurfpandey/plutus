import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { NPSAccount } from "./nps.account.entity";

export enum NPSTier {
  TIERI = 'Tier I',
  TIERII = 'Tier II',
}

export enum FundManager {
  HDFC = 'HDFC Pension Management Company Limited',
  ABSL = 'Aditya Birla Sun Life Pension Management Limited',
  UTI = 'UTI Retirement Solutions Limited',
  SBI = 'SBI Pension Funds Private Limited',
  ICICI = 'ICICI Prudential Pension Funds Management Company Limited',
  KOTAK = 'Kotak Mahindra Pension Fund Limited',
  LIC = 'LIC Pension Fund',
}

export enum AssetClass {
  E = 'Equity (E)',
  C = 'Corporate Bonds (C)',
  G = 'Government Securities (G)',
  A = 'Alternative Assets (A)'
}

@Entity()
export class NPSScheme {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => NPSAccount, {
    cascade: true
  })
  @JoinColumn()
  nps: NPSAccount;

  @Column({
    type: 'enum',
    enum: NPSTier,
    default: NPSTier.TIERI
  })
  tier: NPSTier;

  @Column({
    type: 'enum',
    enum: FundManager
  })
  fundManager: FundManager;

  @Column({
    type: 'enum',
    enum: AssetClass,
  })
  assetClass: AssetClass;

  @Column()
  allocationPercent: number;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 2 })
  totalContribution: number;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 4 })
  totalUnits: number;
}
