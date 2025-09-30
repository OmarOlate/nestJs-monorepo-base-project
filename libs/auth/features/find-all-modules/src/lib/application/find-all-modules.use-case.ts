import { Inject, Injectable } from '@nestjs/common';
import { FIND_ALL_MODULES_SERVICE, FindAllModulesService } from './ports';
import { FindAllModulesInputDto } from '../domain';

@Injectable()
export class FindAllModulesUseCase {
  constructor(
    @Inject(FIND_ALL_MODULES_SERVICE)
    private readonly findAllModulesService: FindAllModulesService
  ) {}

  async execute(input: FindAllModulesInputDto) {
    return await this.findAllModulesService.findAllModules(input);
  }
}
