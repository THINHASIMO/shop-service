import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  name?: string;
  email?: string;
  role?: string;
  created_at?: Date;
  updated_at?: Date;
}
