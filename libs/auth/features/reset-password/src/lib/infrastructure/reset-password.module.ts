import { Module } from '@nestjs/common';
import { ResetPasswordController } from './reset-password.controller';
import { RESET_PASSWORD_SERVICE, ResetPasswordUseCase } from '../application';
import { ResetPasswordSqlService } from './reset-password-sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'libs/auth/database/src/entities/user.entity';
import { StatusUser } from 'libs/auth/database/src/entities/status-user.entity';
import { AuthDatabaseModule } from '../../../../../database/auth-database.module';
import { InitialResetPasswordSqlService } from './initial-reset-password-sql.service';

@Module({
  controllers: [ResetPasswordController],
  providers: [
    ResetPasswordUseCase,
    InitialResetPasswordSqlService,
    {
      provide: RESET_PASSWORD_SERVICE,
      useClass: ResetPasswordSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([User, StatusUser]), AuthDatabaseModule],
  exports: [],
})
export class ResetPasswordModule {}
