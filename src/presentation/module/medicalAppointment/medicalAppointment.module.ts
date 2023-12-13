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
import { MedicalAppointmentService } from '../../../application/services/medicalAppointment/medicalAppointment/medicalAppointment.service';
import { ConfirmationMedicalAppointmentService } from '../../../application/services/confirmationMedicalAppointment/confirmationMedicalAppointment.service';

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
    MedicalAppointmentService,
    CodeRandomService,
    DescriptionService,
    DateService,
    ObjectEntriesService,
    ConfirmationMedicalAppointmentService,
  ],
  exports: [MedicalAppointmentService, MongooseModule],
})
export class MedicalAppointmentModule {}
