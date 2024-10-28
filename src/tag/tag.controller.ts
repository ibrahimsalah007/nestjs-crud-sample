import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TagService } from './tag.service';
import { CreateTagDto, UpdateTagDto } from './dto';
import { TAG_API_CONFIG } from './tag.config';

@ApiTags(TAG_API_CONFIG.TITLE)
@Controller(TAG_API_CONFIG.ROOT)
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post(TAG_API_CONFIG.CREATE)
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Get(TAG_API_CONFIG.FIND_ALL)
  findAll() {
    return this.tagService.findAll();
  }

  @Get(TAG_API_CONFIG.FIND_BY_ID)
  findOne(@Param('id') id: number) {
    return this.tagService.findOne(id);
  }

  @Patch(TAG_API_CONFIG.UPDATE)
  update(@Param('id') id: number, @Body() updateTagDto: UpdateTagDto) {
    return this.tagService.update(id, updateTagDto);
  }

  @Delete(TAG_API_CONFIG.DELETE)
  remove(@Param('id') id: number) {
    return this.tagService.remove(id);
  }
}
