import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
  ) {}

  async Page(): Promise<CreateProductDTO[]> {
    return this.productRepository.find();
  }

  async getIndex(): Promise<CreateProductDTO[]> {
    return this.productRepository.find();
  }

  async create(product: CreateProductDTO): Promise<CreateProductDTO> {
    return await this.productRepository.save(product);
  }

  async update(data: UpdateProductDTO) {
    delete data.user;
    const pro = await this.productRepository
      .findOne({ where: { id: data.id } })
      .then((res) => res);
    if (pro) {
      const result = await this.productRepository
        .update(data.id, data)
        .then((res) => res);
      return result;
    }
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }
}
