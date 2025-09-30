import { CreateModuleInputDto } from '../../domain';

export type CreateModuleService = {
  execute(input: CreateModuleInputDto): Promise<void>;
};

export const CREATE_MODULE_SERVICE = Symbol('CreateModuleService');
