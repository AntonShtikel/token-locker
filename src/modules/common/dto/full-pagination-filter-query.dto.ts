import { IntersectionType } from '@nestjs/swagger';
import { FilterQueryDto } from '~src/modules/common/dto/filter-query.dto';
import { PaginationQueryDto } from '~src/modules/common/dto/pagination-query.dto';
import { FindManyOptions } from 'typeorm';

export class FullPaginationFilterQueryDto extends IntersectionType(
  PaginationQueryDto,
  FilterQueryDto,
) {
  public toSql(): FindManyOptions {
    return {
      skip: (this.page - 1) * this.limit,
      take: this.limit,
      order: {
        [this.sortBy]: this.order,
      },
    };
  }
}
