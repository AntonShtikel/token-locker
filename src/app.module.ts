import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { MainDatabaseModule } from './database/database.module';
import { LoggerModule } from '~common/logger/logger.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule,
    MainDatabaseModule,

    /**
     * * Utility Modules
     */
    LoggerModule,

    /**
     * * Modules
     */
    CommonModule,
  ],
})
export class AppModule {}
