import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AssetClass, FundManager, NPSTier } from "../nps.enums";
import { NPSAccount } from "./nps.account.entity";

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
