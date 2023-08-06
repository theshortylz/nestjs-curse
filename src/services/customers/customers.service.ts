import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      userId: 1,
      lastPurchase: '2023-08-05',
      subscribed: true,
      totalPurchases: 3,
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const product = this.customers.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Customer with id ${id} not found.`);
    }

    return product;
  }

  create(payload: CreateCustomerDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...product,
      ...payload,
    };
  }

  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    console.log(index);
    if (index === -1) {
      throw new NotFoundException(`Customer with id ${id} not found.`);
    }

    this.customers.splice(index, 1);
    return true;
  }
}
