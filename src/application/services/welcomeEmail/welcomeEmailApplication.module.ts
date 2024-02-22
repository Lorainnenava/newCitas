import { Module } from '@nestjs/common';
import { WelcomeEmailService } from './welcomeEmail.service';

@Module({
  providers: [WelcomeEmailService],
  exports: [WelcomeEmailService],
})
export class ConfirmationEmailApplicationModule {}
