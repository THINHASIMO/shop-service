import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private cateRepository: Repository<CategoryEntity>,
  ) {}

  async Page(): Promise<CreateCategoryDTO[]> {
    return this.cateRepository.find();
  }

  async getIndex(): Promise<CreateCategoryDTO[]> {
    return this.cateRepository.find();
  }

  async create(cat: CreateCategoryDTO): Promise<CreateCategoryDTO> {
    return await this.cateRepository.save(cat);
  }

  async update(data: UpdateCategoryDTO) {
    delete data.user;
    const pro = await this.cateRepository
      .findOne({ where: { id: data.id } })
      .then((res) => res);
    if (pro) {
      const result = await this.cateRepository
        .update(data.id, data)
        .then((res) => res);
      return result;
    }
  }

  async remove(id: number) {
    return await this.cateRepository.delete(id);
  }
}
