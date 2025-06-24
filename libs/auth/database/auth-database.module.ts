import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Commune,
  ModuleEntity,
  Province,
  Region,
  StatusUser,
  User,
} from './src';
import { ConfigModule, ConfigService } from '@nestjs/config';

const ENTITIES = [ModuleEntity, Region, Province, Commune, User, StatusUser];

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.getOrThrow<string>('DATABASE_URL'),
        entities: ENTITIES,
        synchronize: false,
        autoLoadEntities: true
      })
    })
  ],
  exports: [TypeOrmModule], 
})
export class AuthDatabaseModule {}
