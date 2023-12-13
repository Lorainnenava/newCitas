import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Patients,
  patientSchema,
} from '../../../domain/entities/patients/patiensts.entity';
import { WelcomeEmailModule } from '../welcomeEmail/welcomeEmail.module';
import { PatientService } from '../../../application/services/patient/patient.service';
import { PatientController } from '../../../infrastructure/controller/patient/patient.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patients.name, schema: patientSchema }]),
    WelcomeEmailModule,
  ],
  providers: [PatientService],
  exports: [PatientService, MongooseModule],
  controllers: [PatientController],
})
export class PatientModule {}
