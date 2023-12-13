import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Doctor,
  DoctorSchema,
} from '../../../domain/entities/doctors/doctor.entity';
import { DoctorService } from '../../../application/services/doctor/doctor.service';
import { DoctorController } from '../../../infrastructure/controller/doctor/doctor.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
  ],
  providers: [DoctorService],
  exports: [DoctorService, MongooseModule],
  controllers: [DoctorController],
})
export class DoctorModule {}
