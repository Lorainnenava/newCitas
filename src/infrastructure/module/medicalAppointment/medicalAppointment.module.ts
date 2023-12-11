import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from '../doctor/doctor.module';
import { PatientModule } from '../patient/patient.module';
import { InvoiceModule } from '../invoices/invoices.module';
import { DateService } from '../../../utils/date/date.service';
import { CodeRandomService } from '../../../utils/code/codeRandom.service';
import { DescriptionService } from '../../../utils/description/description';
import { ObjectEntriesService } from '../../../utils/objectEntries/objectEntries';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from '../../../domain/collections/medicalAppointments/schema/medicalAppointment.entity';
import { MedicalAppointmentController } from '../../controller/medicalAppointment/medicalAppointment.controller';
import { ConfirmationMedicalAppointmentModule } from '../confirmationMedicalAppointment/confirmationMedicalAppointment.module';
import { MedicalAppointmentService } from '../../../application/medicalAppointment/medicalAppointment/medicalAppointment.service';
import { ConfirmationMedicalAppointmentService } from '../../../application/confirmationMedicalAppointment/confirmationMedicalAppointment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalAppointment.name, schema: MedicalAppointmentSchema },
    ]),
    InvoiceModule,
    PatientModule,
    DoctorModule,
    ConfirmationMedicalAppointmentModule
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
