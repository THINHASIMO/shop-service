import { Module } from '@nestjs/common';
import { DataBaseConfig } from 'src/database/database.config';
import { CategoryController } from './category.controller';
import { CategoryProviders } from './category.provider';
import { CategoryService } from './category.service';

@Module({
  imports: [DataBaseConfig],
  controllers: [CategoryController],
  providers: [...CategoryProviders, CategoryService],
})
export class CategoryModule {}
