import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tag } from './tag.entity';
import { TagRepository } from './tag.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [TagController],
  providers: [TagService, TagRepository],
})
export class TagModule {}
