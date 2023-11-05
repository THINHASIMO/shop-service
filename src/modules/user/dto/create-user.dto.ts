import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  name?: string;

  @IsEmail({}, { message: 'Invalid email message' })
  email?: any;

  @IsNotEmpty({ message: 'Password field cannot be empty' })
  password?: string;
}
