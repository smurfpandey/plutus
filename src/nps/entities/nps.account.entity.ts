import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';

import { UserEntity } from '../../users/user.entity';
import { NPSScheme } from './nps.scheme.entity';

@Entity()
export class NPSAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 16, unique: true })
  pran: string;

  @Column({ type: 'varchar', length: 300 })
  subscriberName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 2 })
  totalContribution: number;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 2 })
  totalValue: number;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 2 })
  returnEarned: number;

  @Column({ default: 0, type: 'numeric', precision: 12, scale: 2 })
  intermediaryCharges: number;

  @CreateDateColumn({ type: 'date' })
  lastValuationDate: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @OneToOne(type => UserEntity, {
    cascade: true
  })
  @JoinColumn()
  user: UserEntity;

  @OneToMany(() => NPSScheme, scheme => scheme.nps)
  schemes: NPSScheme[];
}
