import { DataSource } from 'typeorm';
import { FileEntity } from './entity/file.entity';

export const fileProviders = [
  {
    provide: 'FILE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FileEntity),
    inject: ['DATA_SOURCE'],
  },
];
