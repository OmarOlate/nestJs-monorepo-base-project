import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { FindCommunesByProvinceIdUseCase } from '../application';
import {
  FindCommunesByProvinceIdRequestDto,
  FindCommunesByProvinceIdResponseDto,
} from './dtos';

@ApiTags('Address')
@Controller()
export class FindCommunesByProvinceIdController {
  constructor(
    private readonly findCommunesByProvinceIdUseCase: FindCommunesByProvinceIdUseCase
  ) {}

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
