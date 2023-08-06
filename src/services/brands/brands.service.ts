import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from 'src/entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      region: 'LAN',
      isPremium: true,
      actions: 4,
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const product = this.brands.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Brand with id ${id} not found.`);
    }

    return product;
  }

  create(payload: CreateBrandDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateBrandDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...product,
      ...payload,
    };
  }

  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    console.log(index);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    this.brands.splice(index, 1);
    return true;
  }
}
