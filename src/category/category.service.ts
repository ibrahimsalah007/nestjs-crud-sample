import { Injectable } from '@nestjs/common';

import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find({});
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update({ id }, updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryRepository.softDelete({ id });
  }
}
