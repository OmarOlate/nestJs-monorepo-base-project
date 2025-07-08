import {
  DeactivateUserForPasswordInputDto,
  ValidateUserExistsOutputDto,
} from '../../domain';

export type ValidateUserExistsService = {
  execute(
    input: DeactivateUserForPasswordInputDto
  ): Promise<ValidateUserExistsOutputDto>;
};

export const VALIDATE_USER_EXISTS_SERVICE = Symbol('ValidateUserExistsService');
