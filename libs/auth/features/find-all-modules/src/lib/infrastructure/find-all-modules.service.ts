import { ConsoleLogger, Injectable } from '@nestjs/common';
import { FindAllModulesService } from '../application';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleEntity } from '../../../../../database';
import { Repository } from 'typeorm';
import { FindAllModulesRequestDto, FindAllModulesResponseDto } from './dtos';
import { filter } from 'rxjs';
import { off } from 'process';
import { FindAllModulesMapperService } from './find-all-modules-mapper.service';

@Injectable()
export class FindAllModulesSqlService implements FindAllModulesService {
  constructor(
    @InjectRepository(ModuleEntity)
    private moduleRepository: Repository<ModuleEntity>,
    private readonly findAllModulesMapper: FindAllModulesMapperService
  ) {}
  async findAllModules(
    input: FindAllModulesRequestDto
  ): Promise<Readonly<FindAllModulesResponseDto[]>> {
    const queryBuilder = await this.createQueryBuilder(input);

    const modulesRepo = await queryBuilder.getMany();

    return this.findAllModulesMapper.mapper(modulesRepo);
  }

  private async createQueryBuilder(filters: FindAllModulesRequestDto) {
    const queryBuilder = this.moduleRepository.createQueryBuilder('module');

    if (filters.code) {
      queryBuilder.andWhere('module.code LIKE :code', {
        code: `%${filters.code}%`,
      });
    }

    if (filters.name) {
      queryBuilder.andWhere('module.name LIKE :name', {
        name: `%${filters.name}%`,
      });
    }

    return queryBuilder;
  }
}
