import { ConflictException, Injectable } from '@nestjs/common';
import { CreateModuleService } from '../applications';
import { CreateModuleInputDto } from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from 'libs/auth/database/src';
import { Repository } from 'typeorm';
@Injectable()
export class CreateModuleSqlService implements CreateModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private moduleRepository: Repository<ModuleEntity>
  ) {}

  async execute(input: CreateModuleInputDto): Promise<void> {
    const moduleData = await this.moduleRepository.findBy({
      code: input.code,
    });

    if (moduleData.length > 0)
      throw new ConflictException(
        `Module with code: ${String(input.code)} already exists`
      );

    const createModule = this.moduleRepository.create({
      code: input.code,
      name: input.name,
    });

    this.moduleRepository.save(createModule);
  }
}
