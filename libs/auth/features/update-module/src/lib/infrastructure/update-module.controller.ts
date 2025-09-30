import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateModuleUseCase } from '../application';
import { UpdateModuleQueryDto, UpdateModuleRequestDto } from './dtos';

@ApiTags(ApiPath.ROLES_AND_PERMISSIONS)
@Controller()
export class UpdateModuleController {
  constructor(private readonly updateModuleUseCase: UpdateModuleUseCase) {}

  @ApiBearerAuth()
  @Put(':id/update')
  async execute(
    @Param() query: UpdateModuleQueryDto,
    @Body() body: UpdateModuleRequestDto
  ): Promise<void> {
    return this.updateModuleUseCase.execute({
      id: query.id,
      newName: body.newName,
    });
  }
}
