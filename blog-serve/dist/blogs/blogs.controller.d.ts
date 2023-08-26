import { BlogsService } from './blogs.service';
export declare class BlogsController {
    private blogService;
    constructor(blogService: BlogsService);
    save(body: any): any;
    findByPage(q: any): Promise<import("./blogs.entity").Blogs[]>;
    findOne(id: number): Promise<import("./blogs.entity").Blogs>;
}
