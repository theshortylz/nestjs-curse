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
import { UsersService } from 'src/services/users/users.service';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';

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
