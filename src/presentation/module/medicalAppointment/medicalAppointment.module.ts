import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from '../doctor/doctor.module';
import { PatientModule } from '../patient/patient.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { DateService } from '../../../utils/date/date.service';
import { CodeRandomService } from '../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../utils/description/description.service';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from '../../../domain/entities/medicalAppointment/medicalAppointment.entity';
import { ScheduleController } from '../../controller/schedule/schedule.controller';
import { ObjectEntriesService } from '../../../utils/objectEntries/objectEntries.service';
import { MedicalAppointmentController } from '../../controller/medicalAppointment/medicalAppointment.controller';
import { ScheduleByDayService } from '../../../application/services/medicalAppointment/schedule/scheduleByDay.service';
import { ConfirmationMedicalAppointmentModule } from '../confirmationMedicalAppointment/confirmationMedicalAppointment.module';
import { MedicalAppointmentRepository } from '../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { ScheduleByFutureAppointmentsService } from '../../../application/services/medicalAppointment/schedule/scheduleByFuture.service';
import { ScheduleByAppointmentHistoryService } from '../../../application/services/medicalAppointment/schedule/scheduleByHistory.service';
import { ScheduleByCancelledAppointmentsService } from '../../../application/services/medicalAppointment/schedule/scheduleCancelled.service';
import { MedicalAppointmentCreateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentCreate.service';
import { MedicalAppointmentDeleteService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentDelete.service';
import { MedicalAppointmentUpdateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentUpdate.service';
import { MedicalAppointmentsGetAllService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentsGetAll.service';
import { MedicalAppointmentFindByIdService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentFindById.service';
import { ConfirmationMedicalAppointmentService } from '../../../application/services/confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { MedicalAppointmentGetAllByIdService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentGetAllById.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalAppointment.name, schema: MedicalAppointmentSchema },
    ]),
    InvoiceModule,
    PatientModule,
    DoctorModule,
    ConfirmationMedicalAppointmentModule,
  ],
  controllers: [MedicalAppointmentController, ScheduleController],
  providers: [
    DateService,
    MedicalAppointmentRepository,
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
export class MedicalAppointmentModule {}
