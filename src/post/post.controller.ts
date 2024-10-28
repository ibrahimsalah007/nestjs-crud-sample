import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { POST_API_CONFIG } from './post.config';

@ApiTags(POST_API_CONFIG.TITLE)
@Controller(POST_API_CONFIG.ROOT)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post(POST_API_CONFIG.CREATE)
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get(POST_API_CONFIG.FIND_ALL)
  findAll() {
    return this.postService.findAll();
  }

  @Get(POST_API_CONFIG.FIND_BY_ID)
  findOne(@Param('id') id: number) {
    return this.postService.findOne(id);
  }

  @Patch(POST_API_CONFIG.UPDATE)
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(POST_API_CONFIG.DELETE)
  remove(@Param('id') id: number) {
    return this.postService.remove(id);
  }
}
