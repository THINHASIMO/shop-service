import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<CreateProductDTO>,
  ) {}

  async Page(): Promise<CreateProductDTO[]> {
    return this.productRepository.find();
  }

  async create(product: CreateProductDTO): Promise<CreateProductDTO> {
    return await this.productRepository.save(product);
  }

  async update(
    id: any,
    data: object,
  ): Promise<CreateProductDTO | UpdateResult> {
    const book = await this.productRepository.findOne(id).then((res) => res);
    if (book) {
      return await this.productRepository.update(id, data).then((res) => res);
    }
    return;
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }
}
