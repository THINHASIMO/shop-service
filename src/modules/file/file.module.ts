import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { DataBaseConfig } from 'src/database/database.config';
import { FileController } from './file.controller';
import { fileProviders } from './file.provider';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    DataBaseConfig,
    MulterModule.register({
      dest: './assets/image',
    }),
  ],
  controllers: [FileController],
  providers: [...fileProviders, FileService],
})
export class FileModule {}
