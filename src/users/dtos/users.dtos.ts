import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDateString,
  IsEmail,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsDateString()
  @IsNotEmpty()
  readonly date: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly age: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
