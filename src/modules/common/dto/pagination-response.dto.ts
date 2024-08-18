import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponseDto<T = Record<string, any>> {
  @ApiProperty({
    type: () => Array(Object),
  })
  readonly data: T[];

  @ApiProperty({ example: 10 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly totalCount: number;
}
