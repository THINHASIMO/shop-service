import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/v1/api/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.setGlobalPrefix('/v1/api');
  await app.listen(3000);
  console.log('service start: http://localhost:3000/v1/api');
}
bootstrap();
