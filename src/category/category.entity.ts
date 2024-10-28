import { ApiProperty } from '@nestjs/swagger';

import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from 'App/core/database';
import { Post } from 'App/post/post.entity';

@Entity()
export class Category extends BaseEntity {
  @ApiProperty()
  @Column({ unique: true })
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @ApiProperty()
  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];
}
