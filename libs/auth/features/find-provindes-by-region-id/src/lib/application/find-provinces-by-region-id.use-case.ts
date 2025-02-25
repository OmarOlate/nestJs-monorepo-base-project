import { Inject, Injectable } from '@nestjs/common';
import {
  FIND_PROVINCES_BY_REGION_ID,
  FindProvincesByRegionIdService,
} from './ports';
import {
  FindProvincesByRegionIdInputDto,
  FindProvincesByRegionIdOutputDto,
} from '../domain';

@Injectable()
export class FindProvincesByRegionIdUseCase {
  constructor(
    @Inject(FIND_PROVINCES_BY_REGION_ID)
    private readonly findProvincesByRegionId: FindProvincesByRegionIdService
  ) {}

  async execute(
    inputDto: FindProvincesByRegionIdInputDto
  ): Promise<Readonly<FindProvincesByRegionIdOutputDto>> {
    return await this.findProvincesByRegionId.execute(inputDto);
  }
}
