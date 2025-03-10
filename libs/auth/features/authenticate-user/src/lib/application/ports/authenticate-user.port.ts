import {
  AuthenticateUserInputDto,
  AuthenticateUserOutputDto,
} from '../../domain';

export type AuthenticateUserService = {
  authenticate(
    input: AuthenticateUserInputDto
  ): Promise<Readonly<AuthenticateUserOutputDto>>;
};

export const AUTHENTICATE_USER_SERVICE = Symbol('AuthenticateUserService');
