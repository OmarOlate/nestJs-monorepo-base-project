import { Module } from "@nestjs/common";
import { ResetPasswordController } from "./reset-password.controller";
import { ACTIVATE_ACCOUNT_SERVICE, DELETE_TEMPORARY_PASSWORD_SERVICE, GET_USER_DATA_SERVICE, RESET_PASSWORD_SERVICE, ResetPasswordUseCase, VALIDATE_TEMPORARY_PASSWORD_SERVICE } from "../application";
import { GetUserDataSqlService } from "./get-user-data-sql.service";
import { ValidateTemporaryPasswordSqlService } from "./validate-temporary-password-sql.service";
import { ResetPasswordSqlService } from "./reset-password-sql.service";
import { ActivateAccountSqlService } from "./activate-account-sql.service";
import { DeleteTemporaryPasswordSqlService } from "./delete-temporary-password-sql.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthDatabaseModule ,StatusUser, TemporaryPassword, User } from "libs/auth/database";


@Module({
  controllers: [ResetPasswordController],
  providers: [
    ResetPasswordUseCase,
    {
      provide: GET_USER_DATA_SERVICE,
      useClass: GetUserDataSqlService,
    },
    {
      provide: VALIDATE_TEMPORARY_PASSWORD_SERVICE,
      useClass: ValidateTemporaryPasswordSqlService
    },
    {
      provide: RESET_PASSWORD_SERVICE,
      useClass: ResetPasswordSqlService
    },
    {
      provide: ACTIVATE_ACCOUNT_SERVICE,
      useClass: ActivateAccountSqlService
    },
    {
      provide: DELETE_TEMPORARY_PASSWORD_SERVICE,
      useClass: DeleteTemporaryPasswordSqlService
    }
  ],
  imports: [TypeOrmModule.forFeature([User, StatusUser, TemporaryPassword]), AuthDatabaseModule],
  exports: [],
})
export class ResetPasswordModule {}
