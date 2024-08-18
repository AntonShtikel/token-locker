import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import _CONFIG from '..';
import { CustomNamingStrategy } from './utils/custom-naming-strategy';

const entitiesList = [
  // SomeEntity
];

export const _MAIN_DB_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  ..._CONFIG.db.main.config,
  autoLoadEntities: _CONFIG.db.main.options.entities.autoload,
  entities: _CONFIG.db.main.options.entities.autoload
    ? ['dist/**/*.entity{.ts,.js}']
    : entitiesList,
  synchronize: true,
  keepConnectionAlive: true,
  retryAttempts: 2,
  retryDelay: 1000,
  logging: true,
  namingStrategy: new CustomNamingStrategy(),
};
