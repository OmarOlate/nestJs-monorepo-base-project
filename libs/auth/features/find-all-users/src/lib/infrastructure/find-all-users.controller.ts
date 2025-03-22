import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { Controller, Get, Query } from '@nestjs/common';
import { FindAllUsersUseCase } from '../application';
import { FindAllUsersRequestDto, FindAllUsersResponseDto } from './dtos';
import { StandardizedResponse } from '../../../../../../common/decorators/standarized-response.decorator';

@ApiTags(ApiPath.USERS)
@Controller()
export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  @Get()
  @ApiOperation({ description: 'Find all users' })
  @StandardizedResponse(FindAllUsersResponseDto, {
    // isArray: true,
    // description: 'find all users',
    // currentPage: 10,
    // perPage: 10,
    // total: 100,
  })
  async execute(
    @Query() filters: FindAllUsersRequestDto
  ): Promise<Readonly<FindAllUsersResponseDto[]>> {
    return await this.findAllUsersUseCase.execute(filters);
  }
}
