import {
  CreatePendingPasswordOutputDto,
  DeactivateUserForPasswordInputDto,
} from '../../domain';

export type CreatePendingPasswordService = {
  execute(
    input: DeactivateUserForPasswordInputDto
  ): Promise<CreatePendingPasswordOutputDto>;
};

export const CREATE_PENDING_PASSWORD_SERVICE = Symbol(
  'CreatePendingPasswordService'
);
