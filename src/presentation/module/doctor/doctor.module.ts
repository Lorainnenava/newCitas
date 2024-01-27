import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Doctor,
  DoctorSchema,
} from '../../../domain/entities/doctor/doctor.entity';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { DoctorCreateService } from '../../../application/services/doctor/doctorCreate.service';
import { DoctorDeleteService } from '../../../application/services/doctor/doctorDelete.service';
import { DoctorsGetAllService } from '../../../application/services/doctor/doctorsGetAll.service';
import { DoctorUpdateService } from '../../../application/services/doctor/doctorUpdate.service';
import { DoctorFindOneService } from '../../../application/services/doctor/doctorFindOne.service';
import { DoctorController } from '../../controller/doctor/doctor.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
  ],
  providers: [
    DoctorRepository,
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
    MongooseModule,
  ],
  controllers: [DoctorController],
})
export class DoctorModule {}
