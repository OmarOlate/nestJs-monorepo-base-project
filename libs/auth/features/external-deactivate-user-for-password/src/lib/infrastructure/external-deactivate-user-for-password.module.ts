import { Module } from '@nestjs/common';
import { ExternalDeactivateUserForPasswordController } from './external-deactivate-user-for-password.controller';
import { ExternalDeactivateUserForPasswordUseCase, GET_USER_INFORMATION_SERVICE } from '../application';
import { GetUserInformationSqlService } from './get-user-information-sql.service';
import { DeactivateUserForPasswordModule } from 'libs/auth/features/deactivate-user-for-password/src/lib/infrastructure/deactivate-user-for-password.module';
import { AuthDatabaseModule, User } from 'libs/auth/database';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ExternalDeactivateUserForPasswordController],
  providers: [
    ExternalDeactivateUserForPasswordUseCase,
    {
      provide: GET_USER_INFORMATION_SERVICE,
      useClass: GetUserInformationSqlService
    }
  ],
  exports: [],
  imports: [    
    TypeOrmModule.forFeature([User]),
    AuthDatabaseModule,
    DeactivateUserForPasswordModule
],
})
export class ExternalDeactivateUserForPasswordModule {}
