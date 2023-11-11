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

@Controller('upload')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get(':id')
  async getIndex(@Param('id') index: number) {
    return await this.fileService.getIndex(index);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
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
    return this.fileService.create(file);
  }
}
