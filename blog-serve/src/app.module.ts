import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogs } from './blogs/blogs.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456qq.',
      database: 'blog',
      entities: [Blogs],
      synchronize: true,
    }),
    CatsModule,
    BlogsModule,
  ],
})
export class AppModule {}
