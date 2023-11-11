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
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly cateService: CategoryService) {}

  @Get('page')
  async findAll(): Promise<CreateCategoryDTO[]> {
    return this.cateService.Page();
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() product: CreateCategoryDTO) {
    return this.cateService.create(product);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  async update(@Body() product: UpdateCategoryDTO) {
    return await this.cateService.update(product);
  }
}
