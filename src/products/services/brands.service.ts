import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from 'src/products/entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dtos';

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
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found.`);
    }

    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId++;

    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (!brand) {
      return null;
    }

    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...payload,
    };
  }

  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    this.brands.splice(index, 1);
    return true;
  }
}
