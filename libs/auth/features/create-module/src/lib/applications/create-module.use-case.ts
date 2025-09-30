import { Inject, Injectable } from '@nestjs/common';
import { CREATE_MODULE_SERVICE, CreateModuleService } from './ports';
import { CreateModuleInputDto } from '../domain';

@Injectable()
export class CreateModuleUseCase {
  constructor(
    @Inject(CREATE_MODULE_SERVICE)
    private readonly createModuleService: CreateModuleService
  ) {}

  async execute(input: CreateModuleInputDto): Promise<void> {
    return this.createModuleService.execute(input);
  }
}
