import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Patients,
  patientSchema,
} from '../../../domain/entities/patients/patiensts.entity';
import { WelcomeEmailModule } from '../welcomeEmail/welcomeEmail.module';
import { PatientController } from '../../../infrastructure/controller/patient/patient.controller';
import { PatientCreateService } from '../../../application/services/patient/patientCreate.service';
import { PatientDeleteService } from '../../../application/services/patient/patientDelete.service';
import { PatientGetAllService } from '../../../application/services/patient/patientGetAll.service';
import { PatientUpdateService } from '../../../application/services/patient/patientUpdate.service';
import { PatientRepository } from '../../../infrastructure/repository/patients/patients.repository';
import { PatientFindOneService } from '../../../application/services/patient/patientFindOne.service';
import { PatientFindByIdService } from '../../../application/services/patient/patientFindById.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patients.name, schema: patientSchema }]),
    WelcomeEmailModule,
  ],
  providers: [
    PatientRepository,
    PatientCreateService,
    PatientDeleteService,
    PatientFindByIdService,
    PatientFindOneService,
    PatientGetAllService,
    PatientUpdateService,
  ],
  exports: [
    PatientCreateService,
    PatientDeleteService,
    PatientFindByIdService,
    PatientFindOneService,
    PatientGetAllService,
    PatientUpdateService,
    MongooseModule,
  ],
  controllers: [PatientController],
})
export class PatientModule {}
