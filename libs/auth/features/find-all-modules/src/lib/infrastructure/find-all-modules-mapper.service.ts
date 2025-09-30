import { Injectable } from '@nestjs/common';
import { ModuleEntity } from 'libs/auth/database';
import { FindAllModulesResponseDto } from './dtos';

@Injectable()
export class FindAllModulesMapperService {
  mapper(modules: ModuleEntity[]): Readonly<FindAllModulesResponseDto[]> {
    return modules.map((module) => ({
      id: module.id,
      code: module.code,
      name: module.name,
    }));
  }
}
