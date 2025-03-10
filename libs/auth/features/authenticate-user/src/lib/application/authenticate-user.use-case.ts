import { Inject, Injectable } from '@nestjs/common';
import { AUTHENTICATE_USER_SERVICE, AuthenticateUserService } from './ports';
import { AuthenticateUserInputDto, AuthenticateUserOutputDto } from '../domain';

@Injectable()
export class AuthenticateUserUseCase {
  constructor(
    @Inject(AUTHENTICATE_USER_SERVICE)
    private readonly authenticateUserService: AuthenticateUserService
  ) {}

  async execute(
    inputDto: AuthenticateUserInputDto
  ): Promise<Readonly<AuthenticateUserOutputDto>> {
    return await this.authenticateUserService.authenticate(inputDto);
  }
}
