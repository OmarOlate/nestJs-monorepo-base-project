import { Module } from '@nestjs/common';
import { FindCommunesByProvinceIdController } from './find-communes-by-province-id.controller';
import {
  FIND_COMMUNES_BY_PROVINCE_ID,
  FindCommunesByProvinceIdUseCase,
} from '../application';
import { FindCommunesByProvinceIdSqlService } from './find-communes-by-province-id-sql.service';
import { Commune, AuthDatabaseModule } from 'libs/auth/database';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [FindCommunesByProvinceIdController],
  providers: [
    FindCommunesByProvinceIdUseCase,
    {
      provide: FIND_COMMUNES_BY_PROVINCE_ID,
      useClass: FindCommunesByProvinceIdSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([Commune]), AuthDatabaseModule],
  exports: [],
})
export class FindCommunesByProvinceIdModule {}
