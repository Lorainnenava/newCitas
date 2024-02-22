import { Module } from '@nestjs/common';
import { DoctorCreateService } from './create/doctorCreate.service';
import { DoctorDeleteService } from './delete/doctorDelete.service';
import { DoctorUpdateService } from './update/doctorUpdate.service';
import { DoctorsGetAllService } from './getAll/doctorsGetAll.service';
import { DoctorFindOneService } from './findOne/doctorFindOne.service';

@Module({
  providers: [
    DoctorCreateService,
    DoctorDeleteService,
    DoctorFindOneService,
    DoctorsGetAllService,
    DoctorUpdateService,
  ],
  exports: [
    DoctorCreateService,
    DoctorDeleteService,
    DoctorFindOneService,
    DoctorsGetAllService,
    DoctorUpdateService,
  ],
})
export class DoctorApplicationModule {}
