import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { FindAllUsersUseCase } from '../application';
import { FindAllUsersRequestDto, FindAllUsersResponseDto } from './dtos';

@ApiTags(ApiPath.USERS)
@Controller()
export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  @ApiBearerAuth()
  @Get()
  @ApiOperation({ description: 'Find all users' })
  async execute(
    @Query() filters: FindAllUsersRequestDto
  ): Promise<Readonly<FindAllUsersResponseDto[]>> {
    const result = await this.findAllUsersUseCase.execute(filters);
    return result;
  }
}
