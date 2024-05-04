import { Module } from '@nestjs/common';
import { ScheduleByDayService } from './schedule/getByDay/scheduleByDay.service';
import { ScheduleByFutureAppointmentsService } from './schedule/getByFuture/scheduleByFuture.service';
import { ScheduleByAppointmentHistoryService } from './schedule/getHistory/scheduleByHistory.service';
import { ScheduleByCancelledAppointmentsService } from './schedule/getByCancelled/scheduleCancelled.service';
import { MedicalAppointmentCreateService } from './medicalAppointment/create/medicalAppointmentCreate.service';
import { MedicalAppointmentDeleteService } from './medicalAppointment/delete/medicalAppointmentDelete.service';
import { MedicalAppointmentUpdateService } from './medicalAppointment/update/medicalAppointmentUpdate.service';
import { MedicalAppointmentsGetAllService } from './medicalAppointment/getAll/medicalAppointmentsGetAll.service';
import { MedicalAppointmentFindByIdService } from './medicalAppointment/findById/medicalAppointmentFindById.service';
import { MedicalAppointmentGetAllByIdService } from './medicalAppointment/getAllById/medicalAppointmentGetAllById.service';

/**
 * Module for importing medicalAppointment services.
 */
@Module({
  providers: [
    MedicalAppointmentCreateService,
    MedicalAppointmentDeleteService,
    MedicalAppointmentFindByIdService,
    MedicalAppointmentsGetAllService,
    MedicalAppointmentUpdateService,
    MedicalAppointmentGetAllByIdService,
    ScheduleByDayService,
    ScheduleByFutureAppointmentsService,
    ScheduleByAppointmentHistoryService,
    ScheduleByCancelledAppointmentsService,
  ],
  exports: [
    MedicalAppointmentCreateService,
    MedicalAppointmentDeleteService,
    MedicalAppointmentFindByIdService,
    MedicalAppointmentsGetAllService,
    MedicalAppointmentUpdateService,
    MedicalAppointmentGetAllByIdService,
    ScheduleByDayService,
    ScheduleByFutureAppointmentsService,
    ScheduleByAppointmentHistoryService,
    ScheduleByCancelledAppointmentsService,
  ],
})
export class MedicalAppointmentApplicationModule {}
