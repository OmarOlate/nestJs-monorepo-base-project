import { ConflictException, Inject, Injectable } from '@nestjs/common';
import {
  UPDATE_MODULE_SERVICE,
  UpdateModuleService,
  VALIDATE_MODULE_SERVICE,
  ValidateModuleService,
} from './ports';
import { UpdateModuleInputDto } from '../domain';

@Injectable()
export class UpdateModuleUseCase {
  constructor(
    @Inject(VALIDATE_MODULE_SERVICE)
    private readonly validateModuleService: ValidateModuleService,
    @Inject(UPDATE_MODULE_SERVICE)
    private readonly updateModuleService: UpdateModuleService
  ) {}

  async execute(input: UpdateModuleInputDto): Promise<void> {
    await this.validateModuleService.execute(input.id);

    return await this.updateModuleService.execute(input);
  }
}
