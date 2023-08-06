import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  create(@Body() order: any) {
    return {
      message: 'Create Order',
      order,
    };
  }

  @Get(':id')
  getOrderById(@Param('id') id: number) {
    return `Order Id: ${id}`;
  }
}
