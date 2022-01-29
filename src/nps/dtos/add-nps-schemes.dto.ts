import { IsDateString, IsDecimal, IsEnum, IsNotEmpty, IsNumberString, IsUUID, Length, Max, Min, ValidateNested } from 'class-validator';

import { AssetClass, FundManager, NPSTier } from '../entities/nps.scheme.entity';

export class NPSSchemeDTO {

  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsEnum(FundManager)
  fundManager: FundManager;

  @IsNotEmpty()
  @IsEnum(NPSTier)
  tier: NPSTier;

  @IsNotEmpty()
  @IsEnum(AssetClass)
  assetClass: AssetClass;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '2'
  })
  @Min(1)
  @Max(98)
  allocationPercent: number;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '2'
  })
  totalContribution: number;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: '4'
  })
  totalUnits: number;
}

export class AddNPSSchemeDTO {
  @ValidateNested()
  schemes: NPSSchemeDTO[]
}
