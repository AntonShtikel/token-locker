import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationQueryDto {
  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly page: number = 1;

  @ApiProperty({ example: 10, required: false })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly limit: number = 10;
}
