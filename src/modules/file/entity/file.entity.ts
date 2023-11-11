import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'file' })
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  path: string;

  @Column({ default: null })
  mimetype: string;

  @Column({ default: null })
  size: number;

  @Column({ default: null })
  originalname: string;

  @Column({ default: null })
  filename: string;

  @CreateDateColumn({ default: null })
  dateCreated: Date;

  @UpdateDateColumn({ default: null })
  dateUpdated: Date;
}
