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
import { CustomersService } from 'src/services/customers/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAllCustomers() {
    return this.customersService.findAll();
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    this.customersService.findOne(id);
  }

  @Post()
  createCustomer(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.delete(id);
  }
}
