import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PatientService } from '../../../application/patient/patient.service';
import { PatientController } from '../../controller/patient/patient.controller';
import {
  Patients,
  patientSchema,
} from '../../../domain/collections/patients/schema/patiensts.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patients.name, schema: patientSchema }]),
  ],
  providers: [PatientService],
  exports: [PatientService],
  controllers: [PatientController],
})
export class PatientModule {}
