import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DateService } from '../../../utils/date/date.service';
import { CodeRandomService } from '../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../utils/description/description.service';
import { ObjectEntriesService } from '../../../utils/objectEntries/objectEntries.service';
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
import { ConfirmationMedicalAppointmentService } from '../confirmationMedicalAppointment/confirmationMedicalAppointment.service';

@Module({
  providers: [
    DateService,
    MedicalAppointmentCreateService,
    MedicalAppointmentDeleteService,
    MedicalAppointmentFindByIdService,
    MedicalAppointmentsGetAllService,
    MedicalAppointmentUpdateService,
    MedicalAppointmentGetAllByIdService,
    CodeRandomService,
    DescriptionService,
    ObjectEntriesService,
    ConfirmationMedicalAppointmentService,
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
    MongooseModule,
    ScheduleByDayService,
    ScheduleByFutureAppointmentsService,
    ScheduleByAppointmentHistoryService,
    ScheduleByCancelledAppointmentsService,
  ],
})
export class MedicalAppointmentApplicationModule {}
