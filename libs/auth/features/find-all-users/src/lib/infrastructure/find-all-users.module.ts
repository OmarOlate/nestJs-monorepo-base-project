import { Module } from '@nestjs/common';
import { FindAllUsersController } from './find-all-users.controller';
import { FIND_ALL_USERS_SERVICE, FindAllUsersUseCase } from '../application';
import { FindAllUsersSqlService } from './find-all-users-sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindAllUsersView } from 'libs/auth/database/src/views/find-all-users.view';
import { AuthDatabaseModule } from 'libs/auth/database/auth-database.module';
import { FindAllUsersMapperService } from './find-all-users-mapper.service';

@Module({
  controllers: [FindAllUsersController],
  providers: [
    FindAllUsersUseCase,
    FindAllUsersMapperService,
    {
      provide: FIND_ALL_USERS_SERVICE,
      useClass: FindAllUsersSqlService,
    },
  ],
  imports: [TypeOrmModule.forFeature([FindAllUsersView]), AuthDatabaseModule],
})
export class FindAllUsersModule {}
