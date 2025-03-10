import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.controller';
import { CREATE_USER_SERVICE, CreateUserUseCase } from '../application';
import { CreateUserSqlService } from './create-user-sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthDatabaseModule, StatusUser, User } from 'libs/auth/database';

@Module({
  controllers: [CreateUserController],
  providers: [
    CreateUserUseCase,
    { provide: CREATE_USER_SERVICE, useClass: CreateUserSqlService },
  ],
  imports: [TypeOrmModule.forFeature([User, StatusUser]), AuthDatabaseModule],
  exports: [],
})
export class CreateUserModule {}
