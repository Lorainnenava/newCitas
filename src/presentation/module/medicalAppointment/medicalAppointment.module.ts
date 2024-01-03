import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from '../doctor/doctor.module';
import { PatientModule } from '../patient/patient.module';
import { InvoiceModule } from '../invoices/invoices.module';
import { DateService } from '../../../utils/date/date.service';
import { CodeRandomService } from '../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../utils/description/description';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from '../../../domain/entities/medicalAppointments/medicalAppointment.entity';
import { ObjectEntriesService } from '../../../utils/objectEntries/objectEntries';
import { ConfirmationMedicalAppointmentModule } from '../confirmationMedicalAppointment/confirmationMedicalAppointment.module';
import { MedicalAppointmentController } from '../../../infrastructure/controller/medicalAppointment/medicalAppointment.controller';
import { MedicalAppointmentRepository } from '../../../infrastructure/repository/medicalAppointments/medicalAppointments.repository';
import { MedicalAppointmentCreateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentCreate.service';
import { MedicalAppointmentDeleteService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentDelete.service';
import { MedicalAppointmentGetAllService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentGetAll.service';
import { MedicalAppointmentUpdateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentUpdate.service';
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
  controllers: [MedicalAppointmentController],
  providers: [
    MedicalAppointmentRepository,
    MedicalAppointmentCreateService,
    MedicalAppointmentDeleteService,
    MedicalAppointmentFindByIdService,
    MedicalAppointmentGetAllService,
    MedicalAppointmentUpdateService,
    MedicalAppointmentGetAllByIdService,
    CodeRandomService,
    DescriptionService,
    DateService,
    ObjectEntriesService,
    ConfirmationMedicalAppointmentService,
  ],
  exports: [
    MedicalAppointmentCreateService,
    MedicalAppointmentDeleteService,
    MedicalAppointmentFindByIdService,
    MedicalAppointmentGetAllService,
    MedicalAppointmentUpdateService,
    MedicalAppointmentGetAllByIdService,
    MongooseModule,
  ],
})
export class MedicalAppointmentModule {}
