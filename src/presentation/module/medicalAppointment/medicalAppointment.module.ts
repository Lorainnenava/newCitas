import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from '../doctor/doctor.module';
import { PatientModule } from '../patient/patient.module';
import { DateService } from '../../../utils/date/date.service';
import { CodeRandomService } from '../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../utils/description/description.service';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from '../../../domain/entities/medicalAppointment/medicalAppointment.entity';
import { ObjectEntriesService } from '../../../utils/objectEntries/objectEntries.service';
import { ConfirmationMedicalAppointmentModule } from '../confirmationMedicalAppointment/confirmationMedicalAppointment.module';
import { MedicalAppointmentRepository } from '../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { MedicalAppointmentCreateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentCreate.service';
import { MedicalAppointmentDeleteService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentDelete.service';
import { MedicalAppointmentsGetAllService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentsGetAll.service';
import { MedicalAppointmentUpdateService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentUpdate.service';
import { MedicalAppointmentFindByIdService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentFindById.service';
import { ConfirmationMedicalAppointmentService } from '../../../application/services/confirmationMedicalAppointment/confirmationMedicalAppointment.service';
import { MedicalAppointmentGetAllByIdService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointmentGetAllById.service';
import { InvoiceModule } from '../invoice/invoice.module';
import { MedicalAppointmentController } from '../../controller/medicalAppointment/medicalAppointment.controller';

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
    MedicalAppointmentsGetAllService,
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
    MedicalAppointmentsGetAllService,
    MedicalAppointmentUpdateService,
    MedicalAppointmentGetAllByIdService,
    MongooseModule,
  ],
})
export class MedicalAppointmentModule {}
