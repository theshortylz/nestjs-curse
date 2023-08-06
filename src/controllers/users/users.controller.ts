import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return `User Id: ${id}`;
  }
}
