import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [UserModule, CoreModule, ProfileModule, PostModule, CategoryModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
