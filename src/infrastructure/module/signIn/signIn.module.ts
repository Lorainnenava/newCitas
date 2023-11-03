import { Module } from '@nestjs/common';
import { SignInController } from 'src/infrastructure/controller/signIn/signIn.controller';
import { SignInService } from 'src/application/signIn/signIn.service';
import { UserModule } from '../user/user.module';
import { SessionModule } from '../session/session.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    SessionModule,
    JwtModule.register({
      global: true,
      secret: `${process.env.SECRET_KEY}`,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [SignInController],
  providers: [SignInService],
})
export class SignInModule {}
