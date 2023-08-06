import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  // Query,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(':productId')
  getProductById(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   messsage: `product ${productId}`,
    //   productId: productId,
    //   method: 'get',
    // };

    return this.productsService.findOne(productId);
  }

  @Get()
  getAllProducts() {
    // const { limit, offset } = params;
    // return {
    //   message: `Products: limit_${limit}, offset_${offset}, brand_${brand}`,
    //   body: {
    //     limit,
    //     offset,
    //     brand,
    //   },
    // };

    return this.productsService.findAll();
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Create Action',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };

    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
