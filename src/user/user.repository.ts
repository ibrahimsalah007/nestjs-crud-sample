import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm';

import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  /**
   * Example of a custom repository inheriting pre built repository
   * @param findCriteria
   * @param params
   * @returns user
   */
  async findOrCreate(findCriteria: FindOptionsWhere<User>, params: DeepPartial<User>): Promise<User> {
    let user = await this.findOne({ where: findCriteria });

    if (!user) user = await this.save(params);

    return user;
  }
}
