import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  cover: string;

  @Column()
  starCount: number;

  @Column()
  commentCount: number;
}
