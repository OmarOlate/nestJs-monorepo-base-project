import { Module } from '@nestjs/common';
import { FindAllModulesModule } from '@nest-js-monorepo-base-project/find-all-modules';
import { FindAllRegionsModule } from '@nest-js-monorepo-base-project/find-all-regions';
import { RouterModule } from '@nestjs/core';
import { FindProvincesByRegionIdModule } from '@nest-js-monorepo-base-project/find-provindes-by-region-id';
import { FindCommunesByProvinceIdModule } from '@nest-js-monorepo-base-project/find-communes-by-province-id';

@Module({
  imports: [
    FindAllModulesModule,
    FindAllRegionsModule,
    FindProvincesByRegionIdModule,
    FindCommunesByProvinceIdModule,
    RouterModule.register([
      {
        path: 'modules',
        module: FindAllModulesModule,
      },
      {
        path: 'regions',
        module: FindAllRegionsModule,
      },
      {
        path: 'provinces',
        module: FindProvincesByRegionIdModule,
      },
      {
        path: 'communes',
        module: FindCommunesByProvinceIdModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
