import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { CATEGORY_API_CONFIG } from './category.config';

@ApiTags(CATEGORY_API_CONFIG.TITLE)
@Controller(CATEGORY_API_CONFIG.ROOT)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post(CATEGORY_API_CONFIG.CREATE)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get(CATEGORY_API_CONFIG.FIND_ALL)
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(CATEGORY_API_CONFIG.FIND_BY_ID)
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Patch(CATEGORY_API_CONFIG.UPDATE)
  update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(CATEGORY_API_CONFIG.DELETE)
  remove(@Param('id') id: number) {
    return this.categoryService.remove(id);
  }
}
