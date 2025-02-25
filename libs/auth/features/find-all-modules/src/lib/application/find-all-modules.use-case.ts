import { Inject, Injectable } from '@nestjs/common';
import { FIND_ALL_MODULES_SERVICE, FindAllModulesService } from './ports';

@Injectable()
export class FindAllModulesUseCase {
  constructor(
    @Inject(FIND_ALL_MODULES_SERVICE)
    private readonly findAllModulesService: FindAllModulesService
  ) {}

  async execute() {
    return await this.findAllModulesService.findAllModules();
  }
}
