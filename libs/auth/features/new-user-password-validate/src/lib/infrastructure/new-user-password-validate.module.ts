import { Module } from '@nestjs/common';
import { NewUserPasswordValidateController } from './new-user-password-validate.controller';
import { AuthDatabaseModule, TemporaryPassword, User } from 'libs/auth/database';
import { FIND_NEW_USER_SERVICE, NEW_USER_PASSWORD_VALIDATE_SERVICE, NewUserPasswordValidateUseCase } from '../application';
import { FindNewUserSqlService } from './find-new-user-sql.service';
import { NewUserPasswordSqlService } from './new-user-password.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [NewUserPasswordValidateController],
  imports: [
    TypeOrmModule.forFeature([User, TemporaryPassword]),
    AuthDatabaseModule],
  providers: [
    NewUserPasswordValidateUseCase,
    {
      provide: FIND_NEW_USER_SERVICE,
      useClass: FindNewUserSqlService
    },
    {
      provide: NEW_USER_PASSWORD_VALIDATE_SERVICE,
      useClass: NewUserPasswordSqlService
    }
  ],
  exports: [],
})
export class NewUserPasswordValidateModule {}
