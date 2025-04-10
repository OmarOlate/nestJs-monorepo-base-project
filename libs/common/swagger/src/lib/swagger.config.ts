import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication, appName: string): void {
  const workSpaceName = process.env['WORKSPACE_NAME'] || 'Workspace';
  const options = new DocumentBuilder()
    .setTitle(`${appName} API for ${workSpaceName}`)
    .setDescription(`${appName} API documentation for backoffice management`)
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
