import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDTO {
  id?: number;

  @IsString({ message: 'Product name must be of type string' })
  name?: string;

  @IsString({ message: 'Product description must be of type string' })
  description?: string;

  @IsString({ message: 'Product filename must be of type string' })
  filename?: string;

  @IsString({ message: 'Product urlFile must be of type string' })
  urlFile?: string;

  views?: number;
  user?: number;
  isPublished?: boolean;
}
