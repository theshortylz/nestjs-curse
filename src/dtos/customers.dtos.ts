import { IsNumber, IsNotEmpty, IsBoolean, IsDateString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsNumber()
  @IsNotEmpty()
  readonly userId: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly subscribed: boolean;

  @IsDateString()
  @IsNotEmpty()
  readonly lastPurchase: string;

  @IsNumber()
  @IsNotEmpty()
  readonly totalPurchases: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
