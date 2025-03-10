import { Module } from '@nestjs/common';
import { FindAllModulesModule } from '@nest-js-monorepo-base-project/find-all-modules';
import { FindAllRegionsModule } from '@nest-js-monorepo-base-project/find-all-regions';
import { RouterModule } from '@nestjs/core';
import { FindProvincesByRegionIdModule } from '@nest-js-monorepo-base-project/find-provindes-by-region-id';
import { FindCommunesByProvinceIdModule } from '@nest-js-monorepo-base-project/find-communes-by-province-id';
import { CreateUserModule } from '@nest-js-monorepo-base-project/create-user';
import { AuthenticateUserModule } from '@nest-js-monorepo-base-project/authenticate-user';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FindAllModulesModule,
    FindAllRegionsModule,
    FindProvincesByRegionIdModule,
    FindCommunesByProvinceIdModule,
    CreateUserModule,
    AuthenticateUserModule,
    RouterModule.register([
      {
        path: 'modules',
        module: FindAllModulesModule,
      },
      {
        path: 'address',
        children: [
          {
            path: 'regions',
            module: FindAllRegionsModule,
          },
          {
            path: 'provinces',
            module: FindProvincesByRegionIdModule,
          },
        ],
      },
      {
        path: 'login',
        children: [
          {
            path: 'authenticate-user',
            module: AuthenticateUserModule,
          },
          {
            path: 'create-user',
            module: CreateUserModule,
          },
        ],
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
