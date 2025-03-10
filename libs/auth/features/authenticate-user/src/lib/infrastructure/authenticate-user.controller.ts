import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthenticateUserUseCase } from '../application';
import {
  AuthenticateUserRequestDto,
  AuthenticateUserResponseDto,
} from './dtos';

@ApiTags('Login')
@Controller()
export class AuthenticateUserController {
  constructor(
    private readonly authenticateUserUseCase: AuthenticateUserUseCase
  ) {}

  @Post()
  @ApiOperation({ description: 'Authenticate user' })
  async execute(
    @Body() userData: AuthenticateUserRequestDto
  ): Promise<Readonly<AuthenticateUserResponseDto>> {
    return this.authenticateUserUseCase.execute(userData);
  }
}
