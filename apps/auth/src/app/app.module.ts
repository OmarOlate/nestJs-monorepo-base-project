import { Module } from '@nestjs/common';
import { FindAllModulesModule } from '@nest-js-monorepo-base-project/find-all-modules';
import { FindAllRegionsModule } from '@nest-js-monorepo-base-project/find-all-regions';
import { RouterModule } from '@nestjs/core';
import { FindProvincesByRegionIdModule } from '@nest-js-monorepo-base-project/find-provindes-by-region-id';
import { FindCommunesByProvinceIdModule } from '@nest-js-monorepo-base-project/find-communes-by-province-id';
import { CreateUserModule } from '@nest-js-monorepo-base-project/create-user';
import { AuthenticateUserModule } from '@nest-js-monorepo-base-project/authenticate-user';
import { ConfigModule } from '@nestjs/config';
import { FindAllUsersModule } from '@nest-js-monorepo-base-project/find-all-users';
import { ResetPasswordModule } from '@nest-js-monorepo-base-project/reset-password';
import { NewUserPasswordValidateModule } from '@nest-js-monorepo-base-project/new-user-password-validate';
import { DeactivateUserForPasswordModule } from '@nest-js-monorepo-base-project/deactivate-user-for-password';
import { ExternalDeactivateUserForPasswordModule } from '@nest-js-monorepo-base-project/external-deactivate-user-for-password';
import { CreateModuleModule } from '@nest-js-monorepo-base-project/create-module';
import { UpdateModuleModule } from '@nest-js-monorepo-base-project/update-module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    FindAllModulesModule,
    FindAllRegionsModule,
    FindProvincesByRegionIdModule,
    FindCommunesByProvinceIdModule,
    CreateUserModule,
    AuthenticateUserModule,
    FindAllUsersModule,
    ResetPasswordModule,
    NewUserPasswordValidateModule,
    DeactivateUserForPasswordModule,
    ExternalDeactivateUserForPasswordModule,
    CreateModuleModule,
    UpdateModuleModule,
    RouterModule.register([
      {
        path: 'roles-and-permissions',
        children: [
          {
            path: 'modules',
            module: FindAllModulesModule,
          },
          {
            path: 'modules',
            module: CreateModuleModule,
          },
          {
            path: 'modules',
            module: UpdateModuleModule,
          },
        ],
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
          {
            path: 'reset-password',
            module: ResetPasswordModule,
          },
          {
            path: 'new-password-validate',
            module: NewUserPasswordValidateModule,
          },
          {
            path: 'deactivate-user-for-password',
            module: DeactivateUserForPasswordModule,
          },
          {
            path: 'external-deactivate-user-for-password',
            module: ExternalDeactivateUserForPasswordModule,
          },
        ],
      },
      {
        path: 'users',
        children: [
          {
            path: 'users',
            module: FindAllUsersModule,
          },
        ],
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
