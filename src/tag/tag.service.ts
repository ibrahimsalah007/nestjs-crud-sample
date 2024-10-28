import { Injectable } from '@nestjs/common';

import { CreateTagDto, UpdateTagDto } from './dto';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  create(createTagDto: CreateTagDto) {
    return this.tagRepository.save(createTagDto);
  }

  findAll() {
    return this.tagRepository.find({});
  }

  findOne(id: number) {
    return this.tagRepository.findOne({ where: { id } });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update({ id }, updateTagDto);
  }

  remove(id: number) {
    return this.tagRepository.softDelete({ id });
  }
}
