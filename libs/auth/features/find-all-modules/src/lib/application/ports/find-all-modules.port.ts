import { FindAllModulesOutputDto } from '../../domain/dtos';

export type FindAllModulesService = {
  findAllModules: () => Promise<Readonly<FindAllModulesOutputDto>>;
};

export const FIND_ALL_MODULES_SERVICE = Symbol('FindAllModulesServie');
