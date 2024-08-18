import { Module } from '@nestjs/common';
import { MainDatabaseModule } from '~src/database/database.module';
import { CommonController } from './controllers/common.controller';
import { CommonService } from './services/common.service';

@Module({
  imports: [MainDatabaseModule],
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}
