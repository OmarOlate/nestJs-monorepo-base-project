import { Module } from '@nestjs/common';
import { FindALlRegionsController } from './find-all-regions.controller';
import { FindAllRegionsUseCase } from '../application/find-all-regions.use-case';
import { FIND_ALL_REGIONS_SERVICE } from '../application/ports';
import { FindAllRegionsSqlService } from './find-all-regions.service';
import { AuthDatabaseModule, Region } from 'libs/auth/database';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [FindALlRegionsController],
  providers: [
    FindAllRegionsUseCase,
    {
      provide: FIND_ALL_REGIONS_SERVICE,
      useClass: FindAllRegionsSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([Region]), AuthDatabaseModule],
  exports: [],
})
export class FindAllRegionsModule {}
