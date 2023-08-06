import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAllCategories() {
    return {
      categories: [
        {
          name: 'Name 1',
          type: 'Type 1',
        },
      ],
    };
  }

  @Get(':id')
  getategoryById(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
      category: {
        name: 'Name Category',
        type: 'Type Category',
      },
    };
  }

  @Post(':type')
  create(@Param('type') type: string) {
    return `Created category of type: ${type}`;
  }
}
