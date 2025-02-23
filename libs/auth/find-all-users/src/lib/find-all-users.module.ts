import { Module } from '@nestjs/common';
import { FindAllUsersController } from './find-all-users.controller';
import { FindAllUsersService } from './find-all-users.service';

@Module({
  controllers: [FindAllUsersController],
  providers: [FindAllUsersService],
  exports: [],
})
export class FindAllUsersModule {}
