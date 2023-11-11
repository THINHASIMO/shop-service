import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.PREFIX);
  await app.listen(3000);
  console.log('service start: http://localhost:3000/v1/api');
}
bootstrap();
