import { TypeOrmModule } from '@nestjs/typeorm';
import { _MAIN_DB_CONFIG } from 'src/config/database/main';

export const MainDatabaseModule = TypeOrmModule.forRoot(_MAIN_DB_CONFIG);
