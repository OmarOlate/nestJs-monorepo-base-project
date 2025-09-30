import { Module } from '@nestjs/common';
import { CreateModuleController } from './create-module.controller';
import { CREATE_MODULE_SERVICE, CreateModuleUseCase } from '../applications';
import { CreateModuleSqlService } from './create-module.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthDatabaseModule, ModuleEntity } from 'libs/auth/database';

@Module({
  controllers: [CreateModuleController],
  providers: [
    CreateModuleUseCase,
    {
      provide: CREATE_MODULE_SERVICE,
      useClass: CreateModuleSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([ModuleEntity]), AuthDatabaseModule],
  exports: [],
})
export class CreateModuleModule {}
