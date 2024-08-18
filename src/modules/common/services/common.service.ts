import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class CommonService {
  constructor(private readonly entityManager: EntityManager) {}

  public async findDatabaseStats(databaseName: string) {
    const query = `
      SELECT * FROM pg_stat_database
      WHERE datname = $1
    `;
    const params = [databaseName];

    return await this.entityManager.query(query, params);
  }
}
