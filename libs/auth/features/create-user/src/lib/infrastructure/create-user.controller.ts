import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../application';
import { CreateUserRequestDto } from './dtos';
import { ApiPath } from '../../../../../enums/api-path.enum';

@ApiTags(ApiPath.LOGIN)
@Controller()
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @ApiBearerAuth()
  @Post()
  @ApiOperation({ description: 'Create new user' })
  async execute(@Body() userData: CreateUserRequestDto): Promise<void> {
    return this.createUserUseCase.execute(userData);
  }
}
