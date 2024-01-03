import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Doctor,
  DoctorSchema,
} from '../../../domain/entities/doctors/doctor.entity';
import { DoctorRepository } from '../../../infrastructure/repository/doctor/doctor.repository';
import { DoctorController } from '../../../infrastructure/controller/doctor/doctor.controller';
import { DoctorCreateService } from '../../../application/services/doctor/doctorCreate.service';
import { DoctorDeleteService } from '../../../application/services/doctor/doctorDelete.service';
import { DoctorGetAllService } from '../../../application/services/doctor/doctorGetAll.service';
import { DoctorUpdateService } from '../../../application/services/doctor/doctorUpdate.service';
import { DoctorFindOneService } from '../../../application/services/doctor/doctorFindOne.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
  ],
  providers: [
    DoctorRepository,
    DoctorCreateService,
    DoctorDeleteService,
    DoctorFindOneService,
    DoctorGetAllService,
    DoctorUpdateService,
  ],
  exports: [
    DoctorCreateService,
    DoctorDeleteService,
    DoctorFindOneService,
    DoctorGetAllService,
    DoctorUpdateService,
    MongooseModule,
  ],
  controllers: [DoctorController],
})
export class DoctorModule {}
