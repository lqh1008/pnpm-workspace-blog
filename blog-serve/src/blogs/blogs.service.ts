import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogs } from './blogs.entity';
import { BlogsDto } from './blogsdto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blogs)
    private blogsRepository: Repository<Blogs>,
  ) {}

  save(blogs: BlogsDto): void {
    this.blogsRepository
      .createQueryBuilder()
      .insert()
      .into(Blogs)
      .values(blogs)
      .execute();
  }

  findByPage(q: any): Promise<Blogs[]> {
    const { pageSize, pageNum } = q;
    return this.blogsRepository
      .createQueryBuilder('blogs')
      .skip(pageSize * (pageNum - 1))
      .take(pageSize)
      .getMany();
  }

  findOne(id: number): Promise<Blogs | null> {
    return this.blogsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.blogsRepository.delete(id);
  }
}
