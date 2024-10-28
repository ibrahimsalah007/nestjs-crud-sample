import { Injectable } from '@nestjs/common';

import { CreateProfileDto, UpdateProfileDto } from './dto';
import { ProfileRepository } from './profile.repository';
import { UserRepository } from 'App/user/user.repository';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository, private readonly userRepository: UserRepository) {}

  async create({ userId, ...createProfileDto }: CreateProfileDto) {
    const profile = this.profileRepository.create(createProfileDto);

    profile.user = await this.userRepository.findOneByOrFail({ id: userId });

    return this.profileRepository.save(profile);
  }

  findAll() {
    return this.profileRepository.find({});
  }

  findOne(id: number) {
    return this.profileRepository.findOne({ where: { id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepository.update({ id }, updateProfileDto);
  }

  remove(id: number) {
    return this.profileRepository.softDelete({ id });
  }
}
