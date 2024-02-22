import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { RolesGuard } from './utils/roles/roles.guard';
import { ValidationPipe } from './utils/validation/validation.pipe';
import { EntityModule } from './domain/entity.module';
import { PresentationModule } from './presentation/controller/presentation.module';
import { UtilsModule } from './utils/utils.module';
import { AuthGuard } from './utils/protectRoute/auth.guard';

@Module({
  imports: [
    PresentationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`), // connection dataBase
    EntityModule,
    UtilsModule,
  ],
  controllers: [],
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
