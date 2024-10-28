import { ApiProperty } from '@nestjs/swagger';

import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

import { BaseEntity } from 'App/core/database';
import { Profile } from 'App/profile/profile.entity';
import { Post } from 'App/post/post.entity';

@Entity()
export class User extends BaseEntity {
  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column()
  password: string;

  // One-to-One relation
  @ApiProperty({ type: () => Profile })
  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  profile: Profile;

  // One-to-Many relation
  @ApiProperty({ type: () => Post, isArray: true })
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
