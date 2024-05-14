import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { PatientCreateService } from './create/patientCreate.service';
import { PatientDeleteService } from './delete/patientDelete.service';
import { PatientFindByIdService } from './findById/patientFindById.service';
import { PatientsGetAllService } from './getAll/patientsGetAll.service';
import { PatientUpdateService } from './update/patientUpdate.service';

/**
 * Modulo para importar los servicios de "Patient".
 */
@Module({
  imports: [SharedModule],
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
