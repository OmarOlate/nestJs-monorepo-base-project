import { Module } from '@nestjs/common';
import { FindAllUsersModule } from '@nest-js-monorepo-base-project/find-all-users';

@Module({
  imports: [FindAllUsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
