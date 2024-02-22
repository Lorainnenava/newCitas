import { Module } from '@nestjs/common';
import { ConfirmationEmailService } from './confirmationEmail.service';

@Module({
  providers: [ConfirmationEmailService],
  exports: [ConfirmationEmailService],
})
export class ConfirmationEmailApplicationModule {}
