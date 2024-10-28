import { ApiProperty } from '@nestjs/swagger';

import { Column, Entity, ManyToMany } from 'typeorm';

import { BaseEntity } from 'App/core/database';
import { Post } from 'App/post/post.entity';

@Entity()
export class Tag extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true })
  name: string;

  @ApiProperty({ isArray: true })
  @ManyToMany(() => Post, (post) => post.tags)
  posts: Post[];
}
