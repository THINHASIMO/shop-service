import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from './dto/file.dto';

@Injectable()
export class FileService {
  constructor(
    @Inject('FILE_REPOSITORY')
    private fileRepo: Repository<FileDTO>,
  ) {}

  async getIndex(index: number) {
    let param: any = { id: index };
    const file = await this.fileRepo.findOneBy(param);
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }

  async create(file: FileDTO): Promise<FileDTO> {
    file.path = file.path.replace(/\\/g, '/');
    return await this.fileRepo.save(file);
  }
}
