import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindCommunesByProvinceIdService } from '../application';
import {
  FindCommunesByProvinceIdInputDto,
  FindCommunesByProvinceIdOutputDto,
} from '../domain';
import { Commune } from '../../../../../database';
import { Repository } from 'typeorm';
import { FindCommunesByProvinceIdResponseDto } from './dtos';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindCommunesByProvinceIdSqlService
  implements FindCommunesByProvinceIdService
{
  constructor(
    @InjectRepository(Commune)
    private communeRepository: Repository<Commune>
  ) {}

  async execute(
    inputDto: FindCommunesByProvinceIdInputDto
  ): Promise<Readonly<FindCommunesByProvinceIdOutputDto[]>> {
    const communes = await this.communeRepository.find({
      select: { id: true, code: true, name: true },
      where: { province: { id: inputDto.provinceId } },
    });

    if (communes.length === 0)
      throw new NotFoundException(
        `Commune with provindeId ${String(inputDto.provinceId)} not found`
      );

    const result: FindCommunesByProvinceIdResponseDto[] = communes.map(
      (commune) => ({
        id: commune.id,
        name: commune.name,
        code: commune.code,
      })
    );

    return result;
  }
}
