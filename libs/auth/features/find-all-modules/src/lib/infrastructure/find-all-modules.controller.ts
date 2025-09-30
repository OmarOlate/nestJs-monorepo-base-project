import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FindAllModulesUseCase } from '../application';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { FindAllModulesRequestDto, FindAllModulesResponseDto } from './dtos';
import {
  ApiPaginatedResponse,
  PaginationInterceptor,
} from '@nest-js-monorepo-base-project/pagination-interceptor';

@ApiTags(ApiPath.ROLES_AND_PERMISSIONS)
@Controller()
export class FindAllModulesController {
  constructor(private readonly findAllModulesUseCase: FindAllModulesUseCase) {}

  @ApiBearerAuth()
  @UseInterceptors(PaginationInterceptor)
  @ApiPaginatedResponse(FindAllModulesResponseDto)
  @Get()
  @ApiOperation({ description: 'Find all modules' })
  async findAllModules(@Query() filters: FindAllModulesRequestDto) {
    return this.findAllModulesUseCase.execute(filters);
  }
}
