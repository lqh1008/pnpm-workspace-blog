import { Repository } from 'typeorm';
import { Blogs } from './blogs.entity';
import { BlogsDto } from './blogsdto';
export declare class BlogsService {
    private blogsRepository;
    constructor(blogsRepository: Repository<Blogs>);
    save(blogs: BlogsDto): void;
    findByPage(q: any): Promise<Blogs[]>;
    findOne(id: number): Promise<Blogs | null>;
    remove(id: number): Promise<void>;
}
