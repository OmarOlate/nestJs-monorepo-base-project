import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllModulesUseCase } from '../application';

@ApiTags('Modules')
@Controller()
export class FindAllModulesController {
  constructor(private readonly findAllModulesUseCase: FindAllModulesUseCase) {}

  @ApiBearerAuth()
  @Get()
  @ApiOperation({ description: 'Find all modules' })
  findAllModules() {
    return this.findAllModulesUseCase.execute();
  }
}
