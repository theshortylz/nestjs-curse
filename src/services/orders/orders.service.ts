import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [
    {
      id: 1,
      productId: 1,
      createdAt: '2023-08-05',
      received: false,
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const product = this.orders.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Customer with id ${id} not found.`);
    }

    return product;
  }

  create(payload: CreateOrderDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateOrderDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    const index = this.orders.findIndex((item) => item.id === id);
    this.orders[index] = {
      ...product,
      ...payload,
    };
  }

  delete(id: number) {
    const index = this.orders.findIndex((item) => item.id === id);
    console.log(index);
    if (index === -1) {
      throw new NotFoundException(`Customer with id ${id} not found.`);
    }

    this.orders.splice(index, 1);
    return true;
  }
}
