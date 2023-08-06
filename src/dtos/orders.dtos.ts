import { IsString, IsNumber, IsNotEmpty, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;

  @IsString()
  @IsNotEmpty()
  readonly createdAt: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly received: boolean;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
