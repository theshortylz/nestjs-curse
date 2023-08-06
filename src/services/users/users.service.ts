import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      age: 28,
      date: '2002-07-31',
      email: 'theshorty@gmail.com',
      name: 'The Shorty',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const product = this.users.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Customer with id ${id} not found.`);
    }

    return product;
  }

  create(payload: CreateUserDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateUserDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...product,
      ...payload,
    };
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    console.log(index);
    if (index === -1) {
      throw new NotFoundException(`Customer with id ${id} not found.`);
    }

    this.users.splice(index, 1);
    return true;
  }
}
