import {
  FindAllModulesInputDto,
  FindAllModulesOutputDto,
} from '../../domain/dtos';

export type FindAllModulesService = {
  findAllModules(
    input: FindAllModulesInputDto
  ): Promise<Readonly<FindAllModulesOutputDto[]>>;
};

export const FIND_ALL_MODULES_SERVICE = Symbol('FindAllModulesServie');
