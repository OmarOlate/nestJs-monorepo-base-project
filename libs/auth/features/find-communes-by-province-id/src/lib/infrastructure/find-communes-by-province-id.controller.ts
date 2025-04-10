import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { FindCommunesByProvinceIdUseCase } from '../application';
import { FindCommunesByProvinceIdResponseDto } from './dtos';
import { ApiPath } from '../../../../../enums/api-path.enum';

@ApiTags(ApiPath.ADDRESS)
@Controller()
export class FindCommunesByProvinceIdController {
  constructor(
    private readonly findCommunesByProvinceIdUseCase: FindCommunesByProvinceIdUseCase
  ) {}

  @ApiBearerAuth()
  @Get(':provinceId')
  @ApiOperation({ description: 'Find all communes by province id' })
  @ApiParam({
    name: 'provinceId',
    description: 'The ID of the province',
    example: 1,
    required: true,
  })
  execute(
    @Param('provinceId')
    provinceId: number
  ): Promise<Readonly<FindCommunesByProvinceIdResponseDto[]>> {
    return this.findCommunesByProvinceIdUseCase.execute({ provinceId });
  }
}
