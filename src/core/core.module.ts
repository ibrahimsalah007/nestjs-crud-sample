import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

import EnvironmentVariablesSchema from 'App/core/config/environment-variable.schema';
import { TypeOrmConfigService } from './database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: EnvironmentVariablesSchema,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        const entities = dataSource.entityMetadatas;
        console.log('Registered entities:');
        entities.forEach((entity) => {
          console.log(` - ${entity.name}`);
        });
        return addTransactionalDataSource(dataSource);
      },
    }),
  ],
})
export class CoreModule {}
