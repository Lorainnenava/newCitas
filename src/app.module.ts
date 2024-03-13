import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { DomainModule } from './domain/entity.module';
import { RolesGuard } from './utils/roles/roles.guard';
import { AuthGuard } from './utils/protectRoute/auth.guard';
import { ValidationPipe } from './utils/validation/validation.pipe';
import { PresentationModule } from './presentation/controller/controller.module';

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
