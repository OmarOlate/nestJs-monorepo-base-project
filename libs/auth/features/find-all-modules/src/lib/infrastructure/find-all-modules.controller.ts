import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllModulesUseCase } from '../application';

@ApiTags('Modules')
@Controller()
export class FindAllModulesController {
  constructor(private readonly findAllModulesUseCase: FindAllModulesUseCase) {}

  @Get()
  @ApiOperation({ description: 'Find all modules' })
  findAllModules() {
    return this.findAllModulesUseCase.execute();
  }
}
