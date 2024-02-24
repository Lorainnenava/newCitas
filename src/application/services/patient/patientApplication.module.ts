import { Module } from '@nestjs/common';
import { PatientCreateService } from './create/patientCreate.service';
import { PatientDeleteService } from './delete/patientDelete.service';
import { PatientUpdateService } from './update/patientUpdate.service';
import { PatientsGetAllService } from './getAll/patientsGetAll.service';
import { PatientFindByIdService } from './findById/patientFindById.service';

/**
 * Module for importing patient services.
 */
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
  ],
})
export class PatientApplicationModule {}
