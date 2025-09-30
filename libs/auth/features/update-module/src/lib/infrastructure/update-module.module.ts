import { Module } from '@nestjs/common';
import { UpdateModuleController } from './update-module.controller';
import {
  UPDATE_MODULE_SERVICE,
  UpdateModuleUseCase,
  VALIDATE_MODULE_SERVICE,
} from '../application';
import { ValidateModuleSqlService } from './validate-module-sql.service';
import { UpdateModuleSqlService } from './update-module-sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthDatabaseModule, ModuleEntity } from 'libs/auth/database';

@Module({
  controllers: [UpdateModuleController],
  providers: [
    UpdateModuleUseCase,
    {
      provide: VALIDATE_MODULE_SERVICE,
      useClass: ValidateModuleSqlService,
    },
    {
      provide: UPDATE_MODULE_SERVICE,
      useClass: UpdateModuleSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([ModuleEntity]), AuthDatabaseModule],
})
export class UpdateModuleModule {}
