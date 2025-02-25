import { Inject, Injectable } from '@nestjs/common';
import {
  FindCommunesByProvinceIdInputDto,
  FindCommunesByProvinceIdOutputDto,
} from '../domain';
import {
  FIND_COMMUNES_BY_PROVINCE_ID,
  FindCommunesByProvinceIdService,
} from './ports';

@Injectable()
export class FindCommunesByProvinceIdUseCase {
  constructor(
    @Inject(FIND_COMMUNES_BY_PROVINCE_ID)
    private readonly findCommunesByProvinceId: FindCommunesByProvinceIdService
  ) {}

  async execute(
    inputDto: FindCommunesByProvinceIdInputDto
  ): Promise<Readonly<FindCommunesByProvinceIdOutputDto[]>> {
    return await this.findCommunesByProvinceId.execute(inputDto);
  }
}
