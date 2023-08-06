import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Post()
  create(@Body() payload: any) {
    return {
      messsage: 'Brand created correctly',
      payload,
    };
  }

  @Get()
  read() {
    return 'This is the BrandsEndpoint';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Brand with id ${id} was updated sucessfuly`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Brand with id ${id} was deleted sucessfuly`,
    };
  }

  @Get(':id')
  getBrandById(@Param('id') id: number) {
    return `Brand id: ${id}`;
  }
}
