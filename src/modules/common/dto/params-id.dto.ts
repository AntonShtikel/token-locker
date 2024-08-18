import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class ParamsIdDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt({ message: 'ID must be an integer' })
  @IsNotEmpty({ message: 'ID is required' })
  readonly id: number;
}
