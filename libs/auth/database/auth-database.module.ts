import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commune, ModuleEntity, Province, Region } from './src/entities';

const ENTITIES = [ModuleEntity, Region, Province, Commune];

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'auth',
      entities: [...ENTITIES],
      synchronize: false,
      autoLoadEntities: true,
      migrations: ['./src/migrations/*.ts'],
    }),
  ],
  exports: [TypeOrmModule], // Exporta DataSource
})
export class AuthDatabaseModule {}
