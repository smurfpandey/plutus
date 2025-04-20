import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { NPSAccount } from "./nps.account.entity";
import { NPSScheme } from "./nps.scheme.entity";
import { TransactionType } from '../nps.enums';

@Entity()
export class NPSTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => NPSAccount, {
    cascade: true
  })
  @JoinColumn()
  nps: NPSAccount;

  @CreateDateColumn({ type: 'date' })
  transactionDate: Date;

  @Column()
  details: string;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  transactionType: TransactionType;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 2 })
  amount: number;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 4 })
  nav: number;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 4 })
  units: number;

  @OneToOne(type => NPSScheme, {
    cascade: true
  })
  @JoinColumn()
  scheme: NPSScheme;
}
