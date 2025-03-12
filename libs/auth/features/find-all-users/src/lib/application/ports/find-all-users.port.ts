import { FindAllUsersOutputDto } from '../../domain';

export type FindAllUsersService = {
  execute: () => Promise<Readonly<FindAllUsersOutputDto[]>>;
};

export const FIND_ALL_USERS_SERVICE = Symbol('FindAllUsersService');
