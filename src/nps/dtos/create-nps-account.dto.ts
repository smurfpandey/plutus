import { IsDateString, IsDecimal, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class CreateNPSAccountDTO {
  @IsNotEmpty()
  @IsNumberString()
  @Length(12, 12, {
    message: 'pran must 12 digits number'
  })
  pran: string;

  @IsNotEmpty()
  subscriberName: string;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '2'
  })
  totalContribution: number;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '2',
    force_decimal: true,
  })
  totalValue: number;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '2'
  })
  returnEarned: number;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '2'
  })
  intermediaryCharges: number;

  @IsDateString()
  lastValuationDate: Date;
}
