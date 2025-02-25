import {
  FindCommunesByProvinceIdInputDto,
  FindCommunesByProvinceIdOutputDto,
} from '../../domain';

export type FindCommunesByProvinceIdService = {
  execute(
    input: FindCommunesByProvinceIdInputDto
  ): Promise<Readonly<FindCommunesByProvinceIdOutputDto[]>>;
};

export const FIND_COMMUNES_BY_PROVINCE_ID = Symbol(
  'FindCommunesByProvinceIdService'
);
