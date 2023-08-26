import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private blogService: BlogsService) {}
  @Post('save')
  // TODO ： 可以考虑管道优化
  save(@Body() body: any): any {
    body.title ?? (body.title = '');
    body.cover ?? (body.cover = '');
    body.starCount ?? (body.starCount = 0);
    body.commentCount ?? (body.commentCount = 0);
    return this.blogService.save(body);
  }

  @Get('getList')
  findByPage(
    // @Query('pageNum') pageNum: number,
    // @Query('pageSize') pageSize: number,
    @Query() q: any,
  ) {
    return this.blogService.findByPage(q);
  }

  @Get('getBlogById')
  findOne(@Query('id') id: number) {
    console.log('🚀  id:', id);
    return this.blogService.findOne(id);
  }
}
