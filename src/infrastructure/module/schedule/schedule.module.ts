import { Module } from '@nestjs/common';
import { ScheduleController } from '../../controller/schedule/schedule.controller';
import { ScheduleService } from '../../../application/medicalAppointment/schedule/schedule.service';
import { MedicalAppointmentModule } from '../medicalAppointment/medicalAppointment.module';
import { DateService } from '../../../utils/date/date.service';

@Module({
  imports: [MedicalAppointmentModule],
  controllers: [ScheduleController],
  providers: [DateService, ScheduleService],
  exports: [ScheduleService],
})
export class ScheduleModule {}
