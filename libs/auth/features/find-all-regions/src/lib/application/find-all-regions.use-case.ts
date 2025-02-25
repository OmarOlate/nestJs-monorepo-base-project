import { Inject, Injectable } from '@nestjs/common';
import { FIND_ALL_REGIONS_SERVICE, FindAllRegionsService } from './ports';

@Injectable()
export class FindAllRegionsUseCase {
  constructor(
    @Inject(FIND_ALL_REGIONS_SERVICE)
    private readonly findAllRegionsService: FindAllRegionsService
  ) {}

  async execute() {
    return await this.findAllRegionsService.execute();
  }
}
