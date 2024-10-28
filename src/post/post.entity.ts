import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'App/category/category.entity';
import { BaseEntity } from 'App/core/database';
import { Tag } from 'App/tag/tag.entity';
import { User } from 'App/user/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column('text')
  content: string;

  @ApiProperty()
  @Column({ default: false })
  published: boolean;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @ApiProperty({ type: () => Category })
  @ManyToOne(() => Category, (category) => category.posts)
  category: Category;

  @ApiProperty({ type: () => Tag })
  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
