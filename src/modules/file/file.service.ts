import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from './dto/file.dto';
import { FileEntity } from './entity/file.entity';
import 'dotenv/config';
@Injectable()
export class FileService {
  constructor(
    @Inject('FILE_REPOSITORY')
    private fileRepo: Repository<FileEntity>,
  ) {}

  async getIndex(index: number) {
    let param: any = { id: index };
    const file = await this.fileRepo.findOneBy(param);
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }

  async save(file: FileDTO): Promise<FileDTO> {
    if (file) {
      file.path = process.env.PREFIX_IMAGE + '/' + file.filename;
      return await this.fileRepo.save(file);
    } else {
      let res: any = {
        data: null,
        status: '200',
        message: 'please choose file',
      };
      return res;
    }
  }
}
