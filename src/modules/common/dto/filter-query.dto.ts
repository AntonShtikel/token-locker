import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsOptional } from 'class-validator';
import { OrderType } from '../interfaces/order.enum';

export class FilterQueryDto {
  @ApiProperty({ enum: OrderType, example: OrderType.desc, required: false })
  @IsOptional()
  @IsEnum(OrderType, {
    message: `Incorrect order type, only (${Object.values(OrderType).join(', ')}) allowed`,
  })
  readonly order: OrderType = OrderType.desc;

  @ApiProperty({ example: 'created_date', required: false })
  @IsOptional()
  @IsIn(['created_date', 'modified_date', 'id'])
  readonly sortBy: string = 'created_date';
}
