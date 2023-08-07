import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description',
      price: 12,
      stock: 10,
      image: 'image.jpg',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    this.products.splice(index, 1);
    return true;
  }
}
