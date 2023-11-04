import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // global class-validator setting

  /**
   * Swagger setting
   */
  const config = new DocumentBuilder()
    .setTitle('API REST')
    .setDescription('CITAS API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));

  console.log(`Application is running on: ${await app.getUrl()} ✨`);
  console.log(`Swagger UI available at ${await app.getUrl()}/api`);
}
bootstrap();
