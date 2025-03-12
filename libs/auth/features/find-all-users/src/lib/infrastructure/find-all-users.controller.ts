import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { Controller, Get } from '@nestjs/common';
import { FindAllUsersUseCase } from '../application';
import { FindAllUsersResponseDto } from './dtos';

@ApiTags(ApiPath.USERS)
@Controller()
export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  @Get()
  @ApiOperation({ description: 'Find all users' })
  execute(): Promise<Readonly<FindAllUsersResponseDto[]>> {
    return this.findAllUsersUseCase.execute();
  }
}
