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
import { OrdersService } from 'src/users/services/orders.service';
import { CreateOrderDto, UpdateOrderDto } from 'src/users/dtos/orders.dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
}
