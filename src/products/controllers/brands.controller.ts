import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BrandsService } from 'src/products/services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getAllBrands() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  getBrandById(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  updateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.delete(id);
  }
}
