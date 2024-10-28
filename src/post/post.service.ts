import { Injectable } from '@nestjs/common';

import { In } from 'typeorm';

import { CreatePostDto, UpdatePostDto } from './dto';
import { PostRepository } from './post.repository';
import { UserRepository } from 'App/user/user.repository';
import { CategoryRepository } from 'App/category/category.repository';
import { TagRepository } from 'App/tag/tag.repository';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly userRepository: UserRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly tagRepository: TagRepository,
  ) {}

  async create({ tagIds, categoryId, authorId, ...createPostDto }: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);

    post.author = await this.userRepository.findOneByOrFail({ id: authorId });

    post.category = await this.categoryRepository.findOneByOrFail({ id: categoryId });

    post.tags = await this.tagRepository.find({ where: { id: In(tagIds) } });

    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find({
      relations: {
        author: { profile: true },
        category: true,
        tags: true,
      },
    });
  }

  findOne(id: number) {
    return this.postRepository.findOne({
      where: { id },
      relations: {
        author: true,
        category: true,
        tags: true,
      },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update({ id }, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.softDelete({ id });
  }
}
