import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateModuleUseCase } from '../applications';
import { CreateModuleRequestDto } from './dtos';

@ApiTags(ApiPath.ROLES_AND_PERMISSIONS)
@Controller()
export class CreateModuleController {
  constructor(private readonly createModuleUseCase: CreateModuleUseCase) {}

  @Post()
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOperation({ description: 'Create new module for permissions' })
  async execute(@Body() input: CreateModuleRequestDto): Promise<void> {
    return await this.createModuleUseCase.execute(input);
  }
}
