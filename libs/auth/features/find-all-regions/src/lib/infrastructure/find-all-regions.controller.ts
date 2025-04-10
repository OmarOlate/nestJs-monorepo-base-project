import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllRegionsUseCase } from '../application/find-all-regions.use-case';
import { ApiPath } from '../../../../../enums/api-path.enum';

@ApiTags(ApiPath.ADDRESS)
@Controller()
export class FindALlRegionsController {
  constructor(private readonly findAllRegionsUseCase: FindAllRegionsUseCase) {}

  @ApiBearerAuth()
  @Get()
  @ApiOperation({ description: 'Find all regions' })
  execute() {
    return this.findAllRegionsUseCase.execute();
  }
}
