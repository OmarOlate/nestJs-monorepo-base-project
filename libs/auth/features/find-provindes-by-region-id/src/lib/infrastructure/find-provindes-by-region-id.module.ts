import { Module } from '@nestjs/common';
import { FindProvincesByRegionIdController } from './find-provinces-by-region-id.controller';
import { FindProvincesByRegionIdUseCase } from '../application/find-provinces-by-region-id.use-case';
import { FIND_PROVINCES_BY_REGION_ID } from '../application/ports';
import { FindProvincesByRegionIdSqlService } from './find-provinces-by-region-id.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthDatabaseModule, Province } from 'libs/auth/database';

@Module({
  controllers: [FindProvincesByRegionIdController],
  providers: [
    FindProvincesByRegionIdUseCase,
    {
      provide: FIND_PROVINCES_BY_REGION_ID,
      useClass: FindProvincesByRegionIdSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([Province]), AuthDatabaseModule],
  exports: [],
})
export class FindProvincesByRegionIdModule {}
