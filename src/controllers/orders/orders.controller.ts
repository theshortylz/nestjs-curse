import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { OrdersService } from 'src/services/orders/orders.service';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAllCustomers() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    this.ordersService.findOne(id);
  }

  @Post()
  createCustomer(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, payload);
  }

  @Delete(':id')
  deleteCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.delete(id);
  }
}
