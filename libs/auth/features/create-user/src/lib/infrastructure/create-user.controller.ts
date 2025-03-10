import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../application';
import { CreateUserRequestDto } from './dtos';

@ApiTags('Login')
@Controller()
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({ description: 'Create new user' })
  async execute(@Body() userData: CreateUserRequestDto): Promise<void> {
    return this.createUserUseCase.execute(userData);
  }
}
