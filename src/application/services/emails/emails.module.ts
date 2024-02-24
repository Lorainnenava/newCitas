import { Module } from '@nestjs/common';
import { WelcomeEmailApplicationModule } from './welcomeEmail/welcomeEmailApplication.module';
import { ConfirmationEmailApplicationModule } from './confirmationEmail/confirmationEmailApplication.module';
import { ConfirmationMedicalAppointmentApplicationModule } from './confirmationMedicalAppointment/confirmationMedicalAppointmentApplication.module';

/**
 * Module for importing email services.
 */
@Module({
  imports: [
    ConfirmationEmailApplicationModule,
    ConfirmationMedicalAppointmentApplicationModule,
    WelcomeEmailApplicationModule,
  ],
  exports: [
    ConfirmationEmailApplicationModule,
    ConfirmationMedicalAppointmentApplicationModule,
    WelcomeEmailApplicationModule,
  ],
})
export class EmailApplicationModule {}
