import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './shared/guards/validation/validation.pipe';

async function bootstrap() {
  const HOST = process.env.HOST || 'localhost';
  const PORT = process.env.PORT || 3000;

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: '*', credentials: true },
  });

  app.useGlobalPipes(new ValidationPipe()); // global class-validator setting

  /**
   * Swagger setting
   */
  const config = new DocumentBuilder()
    .setTitle('API REST')
    .setDescription('CITAS API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(PORT);

  Logger.log(
    `Swagger UI available at http://${HOST}:${PORT}/api/ ✨`,
    'Bootstrap',
    false,
  );
}
bootstrap();
