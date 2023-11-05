import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  name: string;

  @Column({ default: null })
  description: string;

  @Column({ default: null })
  filename: string;

  @Column({ default: null })
  urlFile: string;

  @Column({ default: 0 })
  views: number;

  @Column({ default: false })
  isPublished: boolean;
}
