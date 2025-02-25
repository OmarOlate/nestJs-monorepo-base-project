import { Injectable } from '@nestjs/common';
import { FindAllModulesService } from '../application';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from '../../../../../database';
import { Repository } from 'typeorm';
import { FindAllModulesOutputDto } from '../domain';

@Injectable()
export class FindAllModulesSqlService implements FindAllModulesService {
  constructor(
    @InjectRepository(ModuleEntity)
    private moduleRepository: Repository<ModuleEntity>
  ) {}
  async findAllModules(): Promise<Readonly<FindAllModulesOutputDto>> {
    const moduleResponse = await this.moduleRepository.find();

    return moduleResponse;
  }
}
