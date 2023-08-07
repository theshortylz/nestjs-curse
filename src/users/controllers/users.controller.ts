import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllCustomers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    this.usersService.findOne(id);
  }

  @Get(':id/orders')
  getUserOrders(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOrdersByUser(id);
  }

  @Post()
  createCustomer(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
