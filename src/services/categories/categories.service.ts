import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      productId: 1,
      type: 'shorts',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const product = this.categories.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Category with id ${id} not found.`);
    }

    return product;
  }

  create(payload: CreateCategoryDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...product,
      ...payload,
    };
  }

  delete(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    console.log(index);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    this.categories.splice(index, 1);
    return true;
  }
}
