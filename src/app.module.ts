import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './infrastructure/module/user/user.module';
import { SessionModule } from './infrastructure/module/session/session.module';
import { SignInModule } from './infrastructure/module/signIn/signIn.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    UserModule,
    SessionModule,
    SignInModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
