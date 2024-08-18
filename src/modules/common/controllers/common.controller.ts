import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ExceptionErrorDto } from '~src/common/dto/exception.error.dto';
import {
  ILivenessResponse,
  ILivenessService,
} from '../interfaces/liveness.interface';
import {
  LivenessHealthStatuses,
  LivenessServices,
  LivenessStatuses,
} from '../interfaces/liveness.enum';
import { CommonService } from '../services/common.service';
import _CONFIG from '~src/config';

@ApiTags('common')
@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}
  @Get('/liveness')
  @ApiOkResponse({
    description: 'Liveness probe',
  })
  @ApiBadRequestResponse({ type: ExceptionErrorDto })
  @ApiNotFoundResponse({ type: ExceptionErrorDto })
  public async getLiveness(): Promise<ILivenessResponse> {
    const dbStatus: ILivenessService = {
      status: LivenessStatuses.up,
      name: LivenessServices.database,
      condition: { health: LivenessHealthStatuses.healthy },
    };
    const result = await this.commonService.findDatabaseStats(
      _CONFIG.db.main.config.database,
    );
    if (!result.length) {
      dbStatus.status = LivenessStatuses.down;
      dbStatus.condition.health = LivenessHealthStatuses.unhealthy;
    }
    return {
      status: LivenessStatuses.up,
      statusCode: HttpStatus.OK,
      services: [dbStatus],
    };
  }
}
