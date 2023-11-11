import { Module } from '@nestjs/common';
import { DataBaseConfig } from './database/database.config';
import { ProductModule } from './modules/product/product.module';
import { FileModule } from './modules/file/file.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './modules/auth/interceptor/auth.interceptor';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import 'dotenv/config';

@Module({
  imports: [
    DataBaseConfig,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', process.env.FOLDER_IMAGE),
      serveRoot: process.env.PREFIX_IMAGE,
    }),
    FileModule,
    UserModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
  ],
})
export class AppModule {}
