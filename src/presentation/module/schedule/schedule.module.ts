import { Module } from '@nestjs/common';
import { DateService } from '../../../utils/date/date.service';
import { MedicalAppointmentModule } from '../medicalAppointment/medicalAppointment.module';
import { ScheduleController } from '../../../infrastructure/controller/schedule/schedule.controller';
import { ScheduleService } from '../../../application/services/medicalAppointment/schedule/schedule.service';

@Module({
  imports: [MedicalAppointmentModule],
  controllers: [ScheduleController],
  providers: [DateService, ScheduleService],
  exports: [ScheduleService],
})
export class ScheduleModule {}
