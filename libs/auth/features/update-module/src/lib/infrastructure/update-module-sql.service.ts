import { Injectable } from '@nestjs/common';
import { UpdateModuleInputDto } from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from 'libs/auth/database/src';
import { Repository } from 'typeorm';
import { UpdateModuleService } from '../application';

@Injectable()
export class UpdateModuleSqlService implements UpdateModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private moduleRepository: Repository<ModuleEntity>
  ) {}
  async execute(input: UpdateModuleInputDto): Promise<void> {
    await this.moduleRepository.update(input.id, { name: input.newName });
  }
}
