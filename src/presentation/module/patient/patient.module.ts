import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Patient,
  patientSchema,
} from '../../../domain/entities/patient/patient.entity';
import { WelcomeEmailModule } from '../welcomeEmail/welcomeEmail.module';
import { PatientCreateService } from '../../../application/services/patient/patientCreate.service';
import { PatientDeleteService } from '../../../application/services/patient/patientDelete.service';
import { PatientUpdateService } from '../../../application/services/patient/patientUpdate.service';
import { PatientFindOneService } from '../../../application/services/patient/patientFindOne.service';
import { PatientFindByIdService } from '../../../application/services/patient/patientFindById.service';
import { PatientRepository } from '../../../infrastructure/repository/patient/patient.repository';
import { PatientsGetAllService } from '../../../application/services/patient/patientsGetAll.service';
import { PatientController } from '../../controller/patient/patient.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patient.name, schema: patientSchema }]),
    WelcomeEmailModule,
  ],
  providers: [
    PatientRepository,
    PatientCreateService,
    PatientDeleteService,
    PatientFindByIdService,
    PatientFindOneService,
    PatientsGetAllService,
    PatientUpdateService,
  ],
  exports: [
    PatientCreateService,
    PatientDeleteService,
    PatientFindByIdService,
    PatientFindOneService,
    PatientsGetAllService,
    PatientUpdateService,
    MongooseModule,
  ],
  controllers: [PatientController],
})
export class PatientModule {}
