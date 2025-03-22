import { FindAllUsersInputDto, FindAllUsersOutputDto } from '../../domain';

export type FindAllUsersService = {
  execute(
    filters: FindAllUsersInputDto
  ): Promise<Readonly<FindAllUsersOutputDto[]>>;
};

export const FIND_ALL_USERS_SERVICE = Symbol('FindAllUsersService');
