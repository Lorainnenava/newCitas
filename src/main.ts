import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from './utils/validation/validation.pipe';

async function bootstrap() {
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
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));

  console.log(`Application is running on: ${await app.getUrl()} ✨`);
  console.log(`Swagger UI available at ${await app.getUrl()}/api`);
}
bootstrap();
