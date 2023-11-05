import { Module } from '@nestjs/common';
import { DataBaseConfig } from 'src/database/database.config';
import { ProductController } from './product.controller';
import { productProviders } from './product.provider';
import { ProductService } from './product.service';

@Module({
  imports: [DataBaseConfig],
  controllers: [ProductController],
  providers: [...productProviders, ProductService],
})
export class ProductModule {}
