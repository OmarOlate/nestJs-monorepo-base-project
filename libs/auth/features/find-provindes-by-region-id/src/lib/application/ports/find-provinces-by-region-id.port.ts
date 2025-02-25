import {
  FindProvincesByRegionIdInputDto,
  FindProvincesByRegionIdOutputDto,
} from '../../domain';

export type FindProvincesByRegionIdService = {
  execute(
    findProvincesByRegionIdInputDto: FindProvincesByRegionIdInputDto
  ): Promise<Readonly<FindProvincesByRegionIdOutputDto>>;
};

export const FIND_PROVINCES_BY_REGION_ID = Symbol(
  'FindProvincesByRegionIdService'
);
