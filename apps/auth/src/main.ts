import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { setupSwagger } from '@nest-js-monorepo-base-project/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appName = 'Auth';

  setupSwagger(app, appName);

  await app.listen(3000);
  Logger.log(`🚀 ${appName} API is running on http://localhost:3000/api`);
}

bootstrap();
