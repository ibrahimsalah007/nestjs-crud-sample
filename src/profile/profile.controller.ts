import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProfileService } from './profile.service';
import { CreateProfileDto, UpdateProfileDto } from './dto';
import { PROFILE_API_CONFIG } from './profile.config';

@ApiTags(PROFILE_API_CONFIG.TITLE)
@Controller(PROFILE_API_CONFIG.ROOT)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post(PROFILE_API_CONFIG.CREATE)
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get(PROFILE_API_CONFIG.FIND_ALL)
  findAll() {
    return this.profileService.findAll();
  }

  @Get(PROFILE_API_CONFIG.FIND_BY_ID)
  findOne(@Param('id') id: number) {
    return this.profileService.findOne(id);
  }

  @Patch(PROFILE_API_CONFIG.UPDATE)
  update(@Param('id') id: number, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id, updateProfileDto);
  }

  @Delete(PROFILE_API_CONFIG.DELETE)
  remove(@Param('id') id: number) {
    return this.profileService.remove(id);
  }
}
