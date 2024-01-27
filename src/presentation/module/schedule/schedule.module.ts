import { Module } from '@nestjs/common';
import { DateService } from '../../../utils/date/date.service';
import { MedicalAppointmentModule } from '../medicalAppointment/medicalAppointment.module';
import { ScheduleRepository } from '../../../infrastructure/repository/schedule/schedule.repository';
import { ScheduleByDayService } from '../../../application/services/medicalAppointment/schedule/scheduleByDay.service';
import { ScheduleByFutureAppointmentsService } from '../../../application/services/medicalAppointment/schedule/scheduleByFuture.service';
import { ScheduleByAppointmentHistoryService } from '../../../application/services/medicalAppointment/schedule/scheduleByHistory.service';
import { ScheduleByCancelledAppointmentsService } from '../../../application/services/medicalAppointment/schedule/scheduleCancelled.service';
import { ScheduleController } from '../../controller/schedule/schedule.controller';

@Module({
  imports: [MedicalAppointmentModule],
  controllers: [ScheduleController],
  providers: [
    ScheduleRepository,
    DateService,
    ScheduleByDayService,
    ScheduleByFutureAppointmentsService,
    ScheduleByAppointmentHistoryService,
    ScheduleByCancelledAppointmentsService,
  ],
  exports: [
    ScheduleByDayService,
    ScheduleByFutureAppointmentsService,
    ScheduleByAppointmentHistoryService,
    ScheduleByCancelledAppointmentsService,
  ],
})
export class ScheduleModule {}
