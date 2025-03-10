import { CreateUserInputDto } from '../../domain';

export type CreateUserService = {
  createUser(input: CreateUserInputDto): Promise<void>;
};

export const CREATE_USER_SERVICE = Symbol('CreateUserService');
