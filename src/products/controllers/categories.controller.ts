import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from 'src/products/services/categories.service';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/products/dtos/categories.dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAllCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id);
  }
}
