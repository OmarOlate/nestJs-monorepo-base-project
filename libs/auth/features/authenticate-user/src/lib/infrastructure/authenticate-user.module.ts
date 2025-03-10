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

@Module({
  controllers: [AuthenticateUserController],
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
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
