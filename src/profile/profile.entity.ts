import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'App/core/database';
import { User } from 'App/user/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Profile extends BaseEntity {
  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column({ nullable: true })
  bio: string;

  @ApiProperty()
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty()
  @Column({ nullable: true })
  phoneNumber: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
