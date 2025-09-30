import { UpdateModuleInputDto } from '../../domain';

export type ValidateModuleService = {
  execute(input: UpdateModuleInputDto['id']): Promise<void>;
};

export const VALIDATE_MODULE_SERVICE = Symbol('ValidateModuleService');
