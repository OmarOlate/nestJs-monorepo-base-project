import { Module } from '@nestjs/common';
import { FindAllModulesController } from './find-all-modules.controller';
import {
  FIND_ALL_MODULES_SERVICE,
  FindAllModulesUseCase,
} from '../application';
import { FindAllModulesSqlService } from './find-all-modules.service';
import { AuthDatabaseModule, ModuleEntity } from 'libs/auth/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindAllModulesMapperService } from './find-all-modules-mapper.service';

@Module({
  controllers: [FindAllModulesController],
  providers: [
    FindAllModulesUseCase,
    FindAllModulesMapperService,
    {
      provide: FIND_ALL_MODULES_SERVICE,
      useClass: FindAllModulesSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([ModuleEntity]), AuthDatabaseModule],
  exports: [],
})
export class FindAllModulesModule {}
