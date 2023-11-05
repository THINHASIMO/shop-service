import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from './dto/file.dto';

@Injectable()
export class FileService {
  constructor(
    @Inject('FILE_REPOSITORY')
    private fileRepo: Repository<FileDTO>,
  ) {}
}
