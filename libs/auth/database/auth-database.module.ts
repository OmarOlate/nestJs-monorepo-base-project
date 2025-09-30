import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Commune,
  ModuleEntity,
  Province,
  Region,
  StatusUser,
  TemporaryPassword,
  User,
} from './src';
import { ConfigModule, ConfigService } from '@nestjs/config';

const ENTITIES = [
  ModuleEntity,
  Region,
  Province,
  Commune,
  User,
  StatusUser,
  TemporaryPassword,
];

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.getOrThrow<string>('DATABASE_URL'),
        // ssl: {
        //   rejectUnauthorized: false,
        // },
        entities: [...ENTITIES],
        synchronize: false,
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class AuthDatabaseModule {}
