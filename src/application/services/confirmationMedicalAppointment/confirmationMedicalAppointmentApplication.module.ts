import { Module } from '@nestjs/common';
import { ConfirmationMedicalAppointmentService } from './confirmationMedicalAppointment.service';

@Module({
  providers: [ConfirmationMedicalAppointmentService],
  exports: [ConfirmationMedicalAppointmentService],
})
export class ConfirmationMedicalAppointmentApplicationModule {}
