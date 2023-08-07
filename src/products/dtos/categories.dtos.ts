import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;

  @IsString()
  @IsNotEmpty()
  readonly type: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
