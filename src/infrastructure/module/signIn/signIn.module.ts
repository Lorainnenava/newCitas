import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from '../user/user.module';
import { SessionModule } from '../session/session.module';
import { SignInController } from '../../controller/signIn/signIn.controller';
import { SignInService } from '../../../application/signIn/signIn.service';
import { AuthGuard } from '../../../application/signIn/protectRoute/auth.guard';

@Module({
  imports: [
    UserModule,
    SessionModule,
    JwtModule.register({
      // jwt setting
      global: true,
      secret: `${process.env.SECRET_KEY}`,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [SignInController],
  providers: [
    SignInService,
    // global setting protect routes
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class SignInModule {}
