import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DataBaseConfig } from 'src/database/database.config';
import { userProviders } from './user.provider';

@Module({
  imports: [DataBaseConfig],
  controllers: [],
  providers: [...userProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
