import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { DomainModule } from './domain/entity.module';
import { PresentationModule } from './presentation/controller/controller.module';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { ValidationPipe } from './shared/guards/validation/validation.pipe';
import { RolesGuard } from './shared/guards/roles/roles.guard';

@Module({
  imports: [
    PresentationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`), // connection dataBase
    DomainModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
