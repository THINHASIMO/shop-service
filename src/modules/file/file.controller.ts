import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  Param,
  UseGuards,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import 'dotenv/config';

@Controller('upload')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get(':id')
  async getIndex(@Param('id') index: number) {
    return await this.fileService.getIndex(index);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: process.env.FOLDER_IMAGE,
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log('upload file image', file);
    return this.fileService.save(file);
  }
}
