import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateModuleInputDto } from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from 'libs/auth/database/src';
import { Repository } from 'typeorm';
import { ValidateModuleService } from '../application';

@Injectable()
export class ValidateModuleSqlService implements ValidateModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private moduleRepository: Repository<ModuleEntity>
  ) {}

  async execute(id: UpdateModuleInputDto['id']): Promise<void> {
    const moduleData = await this.moduleRepository.findOneBy({
      id,
    });

    if (!moduleData)
      throw new ConflictException(`Module with code: ${id} is not exists`);
  }
}
