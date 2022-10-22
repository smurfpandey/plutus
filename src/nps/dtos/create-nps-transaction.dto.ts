import { IsDateString, IsDecimal, IsEnum, IsNotEmpty, IsUUID } from "class-validator";
import { TransactionType } from "../nps.enums";

export class CreateNPSTransactionDTO {
  @IsDateString()
  transactionDate: Date;

  details: string;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  transactionType: TransactionType;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '2'
  })
  amount: number;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '4'
  })
  nav: number;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '4'
  })
  units: number;

  @IsUUID()
  schemeID: string;
}
