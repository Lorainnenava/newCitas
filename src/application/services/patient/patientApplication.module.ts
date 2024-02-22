import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientCreateService } from './create/patientCreate.service';
import { PatientDeleteService } from './delete/patientDelete.service';
import { PatientUpdateService } from './update/patientUpdate.service';
import { PatientsGetAllService } from './getAll/patientsGetAll.service';
import { PatientFindByIdService } from './findById/patientFindById.service';

@Module({
  providers: [
    PatientCreateService,
    PatientDeleteService,
    PatientFindByIdService,
    PatientsGetAllService,
    PatientUpdateService,
  ],
  exports: [
    PatientCreateService,
    PatientDeleteService,
    PatientFindByIdService,
    PatientsGetAllService,
    PatientUpdateService,
    MongooseModule,
  ],
})
export class PatientApplicationModule {}
