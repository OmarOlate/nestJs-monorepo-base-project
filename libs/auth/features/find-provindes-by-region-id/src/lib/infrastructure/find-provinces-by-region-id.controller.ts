import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindProvincesByRegionIdUseCase } from '../application/find-provinces-by-region-id.use-case';
import { ApiPath } from '../../../../../enums/api-path.enum';

@ApiTags(ApiPath.ADDRESS)
@Controller()
export class FindProvincesByRegionIdController {
  constructor(
    private readonly findProvincesByRegionIdUseCase: FindProvincesByRegionIdUseCase
  ) {}

  @Get(':regionId')
  @ApiOperation({ description: 'Find all provinces by region id' })
  execute(@Param('regionId') regionId: number) {
    return this.findProvincesByRegionIdUseCase.execute({ regionId });
  }
}
