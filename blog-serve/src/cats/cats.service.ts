import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  create(cat: any) {
    console.log('create success');
    return `This action adds a new ${cat}}`;
  }

  findAll(): string[] {
    return [];
  }

  findOne(id) {
    return `This action returns a #${id} cat`;
  }
}
