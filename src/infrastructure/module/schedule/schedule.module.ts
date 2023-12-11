import { Module } from '@nestjs/common';
import { DateService } from '../../../utils/date/date.service';
import { ScheduleController } from '../../controller/schedule/schedule.controller';
import { MedicalAppointmentModule } from '../medicalAppointment/medicalAppointment.module';
import { ScheduleService } from '../../../application/medicalAppointment/schedule/schedule.service';

@Module({
  imports: [MedicalAppointmentModule],
  controllers: [ScheduleController],
  providers: [DateService, ScheduleService],
  exports: [ScheduleService],
})
export class ScheduleModule {}
