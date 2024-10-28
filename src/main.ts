import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { initializeTransactionalContext } from 'typeorm-transactional';

import { AppModule } from './app.module';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  /**
   * This middleware is used to enable the CORS for the application
   */
  app.enableCors();

  /**
   * This pipe is used to validate the DTOs
   */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Access the underlying Express instance
  const expressInstance = app.getHttpAdapter().getInstance();

  // Set trust proxy
  expressInstance.set('trust proxy', true);

  /**
   * This is the swagger configuration for the API documentation generation and display on the browser at /docs route
   */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sample Crud API')
    .setDescription('Sample Crud API Documentations')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(configService.get('PORT'));
}

bootstrap();
