import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':id')
  getCustomersById(@Param('id') id: number) {
    return `Customer Id: ${id}`;
  }
}
