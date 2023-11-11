import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCategoryDTO {
  id?: number;

  @IsString({ message: 'Product name must be of type string' })
  name?: string;

  @IsString({ message: 'Product description must be of type string' })
  description?: string;
  user?: number;
  isPublished?: boolean;
}
