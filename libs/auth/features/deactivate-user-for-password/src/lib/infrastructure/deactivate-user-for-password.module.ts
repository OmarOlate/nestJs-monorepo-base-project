import { Module } from '@nestjs/common';
import { DeactivateUserForPasswordController } from './deactivate-user-for-password.controller';
import { DeactivateUserForPasswordUseCase } from '../application/deactivate-user-for-password.use-case';
import { CREATE_PENDING_PASSWORD_SERVICE, DEACTIVATE_USER_FOR_PASSWORD_SERVICE, VALIDATE_PENDING_PASSWORD_SERVICE, VALIDATE_USER_EXISTS_SERVICE } from '../application';
import { ValidateUserExistsSqlService } from './validate-user-exists-sql.service';
import { ValidatePendingPasswordSqlService } from './validate-pending-password-sql.service';
import { DeactivateUserForPasswordSqlService } from './deactivate-user-for-password-sql.service';
import { CreatePendingPasswordSqlService } from './create-pending-password-sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthDatabaseModule, StatusUser, TemporaryPassword, User } from 'libs/auth/database';

@Module({
  controllers: [DeactivateUserForPasswordController],
  providers: [
    DeactivateUserForPasswordUseCase,
    {
      provide: VALIDATE_USER_EXISTS_SERVICE,
      useClass: ValidateUserExistsSqlService,
    },
    {
      provide: VALIDATE_PENDING_PASSWORD_SERVICE,
      useClass: ValidatePendingPasswordSqlService
    },
    {
      provide: CREATE_PENDING_PASSWORD_SERVICE,
      useClass: CreatePendingPasswordSqlService
    },
    {
      provide: DEACTIVATE_USER_FOR_PASSWORD_SERVICE,
      useClass:DeactivateUserForPasswordSqlService
    }
  ],
  exports: [
    DeactivateUserForPasswordUseCase,
  ],
  imports: [
    TypeOrmModule.forFeature([User, TemporaryPassword, StatusUser]),AuthDatabaseModule
  ]
})
export class DeactivateUserForPasswordModule {}
