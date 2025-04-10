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
import { StandardizedResponse } from '../../../../../../common/decorators/standarized-response.decorator';

@ApiTags(ApiPath.USERS)
@Controller()
export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  @ApiBearerAuth()
  @Get()
  @ApiOperation({ description: 'Find all users' })
  @StandardizedResponse(FindAllUsersResponseDto)
  async execute(
    @Query() filters: FindAllUsersRequestDto
  ): Promise<Readonly<FindAllUsersResponseDto[]>> {
    const result = await this.findAllUsersUseCase.execute(filters);
    return result;
  }
}
