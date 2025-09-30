import { UpdateModuleInputDto } from '../../domain';

export type UpdateModuleService = {
  execute(input: UpdateModuleInputDto): Promise<void>;
};

export const UPDATE_MODULE_SERVICE = Symbol('UpdateModuleService');
