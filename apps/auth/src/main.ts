import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { setupSwagger } from '@nest-js-monorepo-base-project/swagger';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'libs/auth/features/guards/jwt-token.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appName = 'Auth';
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get<string>('URL_CORS'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  const reflector = app.get(Reflector);
  const jwtService = app.get(JwtService);
  app.useGlobalGuards(new AuthGuard(jwtService, reflector));

  setupSwagger(app, appName);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  Logger.log(`🚀 ${appName} API is running on http://localhost:3000/api`);
}

bootstrap();
