import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsBoolean,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly isPremium: boolean;

  @IsString()
  @IsNotEmpty()
  readonly region: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly actions: number;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
