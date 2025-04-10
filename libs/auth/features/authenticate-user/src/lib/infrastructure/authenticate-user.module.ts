import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticateUserSqlService } from './uthenticate-user-sql.service';
import { AuthenticateUserController } from './authenticate-user.controller';
import {
  AUTHENTICATE_USER_SERVICE,
  AuthenticateUserUseCase,
} from '../application';
import { AuthDatabaseModule, User } from 'libs/auth/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtSecretKeyEnum } from './enums';

@Module({
  controllers: [AuthenticateUserController],
  imports: [
    JwtModule.register({
      global: true,
      secret: JwtSecretKeyEnum.secret,
      signOptions: { expiresIn: '2h' },
    }),
    TypeOrmModule.forFeature([User]),
    AuthDatabaseModule,
  ],
  providers: [
    AuthenticateUserUseCase,
    {
      provide: AUTHENTICATE_USER_SERVICE,
      useClass: AuthenticateUserSqlService,
    },
  ],
})
export class AuthenticateUserModule {}
