import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from './post.entity';
import { PostRepository } from './post.repository';
import { UserRepository } from 'App/user/user.repository';
import { CategoryRepository } from 'App/category/category.repository';
import { TagRepository } from 'App/tag/tag.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService, PostRepository, UserRepository, CategoryRepository, TagRepository],
})
export class PostModule {}
