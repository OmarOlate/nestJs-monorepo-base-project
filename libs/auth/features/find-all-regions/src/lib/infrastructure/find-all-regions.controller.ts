import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllRegionsUseCase } from '../application/find-all-regions.use-case';

@ApiTags('Address')
@Controller()
export class FindALlRegionsController {
  constructor(private readonly findAllRegionsUseCase: FindAllRegionsUseCase) {}

  @Get()
  @ApiOperation({ description: 'Find all regions' })
  execute() {
    return this.findAllRegionsUseCase.execute();
  }
}
