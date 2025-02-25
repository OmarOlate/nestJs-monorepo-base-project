import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllRegionsService } from '../application/ports';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from '../../../../../database';
import { Repository } from 'typeorm';
import { FindAllRegionsOutputDto } from '../domain';

@Injectable()
export class FindAllRegionsSqlService implements FindAllRegionsService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>
  ) {}
  async execute(): Promise<Readonly<FindAllRegionsOutputDto>> {
    const regions = await this.regionRepository.find({
      order: { order: 'ASC' },
    });

    if (!regions) throw new NotFoundException(`Regions not found`);

    return regions;
  }
}
