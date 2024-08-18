import { DefaultNamingStrategy, Table, NamingStrategyInterface } from 'typeorm';
import crypto from 'crypto';

export class CustomNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  foreignKeyName(
    tableOrName: Table | string,
    columnNames: string[],
    referencedTablePath?: string,
    _referencedColumnNames?: string[],
  ): string {
    const tableName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
    const columns = columnNames.join('_');
    const referencedTable = referencedTablePath
      ? `${referencedTablePath}_`
      : '';
    const concatenatedName = `${tableName}_${referencedTable}${columns}`;
    return `fk_${concatenatedName}_${this.getHash(concatenatedName)}`;
  }

  primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
    const tableName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
    const columns = columnNames.join('_');
    const concatenatedName = `${tableName}_${columns}`;
    return `pk_${concatenatedName}_${this.getHash(concatenatedName)}`;
  }

  relationConstraintName(
    tableOrName: Table | string,
    columnNames: string[],
  ): string {
    const tableName =
      typeof tableOrName === 'string' ? tableOrName : tableOrName.name;
    const columns = columnNames.join('_');
    const concatenatedName = `${tableName}_${columns}`;
    return `uc_${concatenatedName}_${this.getHash(concatenatedName)}`;
  }

  private getHash(data: string): string {
    return crypto.createHash('md5').update(data).digest('hex');
  }
}
