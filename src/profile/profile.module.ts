import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.entity';
import { ProfileRepository } from './profile.repository';
import { UserRepository } from 'App/user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository, UserRepository],
})
export class ProfileModule {}
