import { Injectable, NotFoundException } from '@nestjs/common';
import { FindProvincesByRegionIdService } from '../application/ports';
import {
  FindProvincesByRegionIdInputDto,
  FindProvincesByRegionIdOutputDto,
} from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from '../../../../../database';
import { Repository } from 'typeorm';

@Injectable()
export class FindProvincesByRegionIdSqlService
  implements FindProvincesByRegionIdService
{
  constructor(
    @InjectRepository(Province)
    private provinceRepository: Repository<Readonly<Province>>
  ) {}
  async execute(
    input: FindProvincesByRegionIdInputDto
  ): Promise<Readonly<FindProvincesByRegionIdOutputDto>> {
    const provinces = await this.provinceRepository.find({
      select: {
        id: true,
        name: true,
      },
      where: { region: { id: input.regionId } },
    });

    if (provinces.length === 0)
      throw new NotFoundException(
        `Province with regionId: ${String(input.regionId)} not found`
      );

    return provinces;
  }
}
