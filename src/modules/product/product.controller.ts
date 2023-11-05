import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('page')
  async findAll(): Promise<CreateProductDTO[]> {
    return this.productService.Page();
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() product: CreateProductDTO) {
    return this.productService.create(product);
  }
}
