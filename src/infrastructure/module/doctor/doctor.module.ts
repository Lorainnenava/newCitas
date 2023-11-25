import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Doctor,
  DoctorSchema,
} from '../../../domain/collections/doctors/schema/doctor.entity';
import { DoctorService } from '../../../application/doctor/doctor.service';
import { DoctorController } from '../../controller/doctor/doctor.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }]),
  ],
  providers: [DoctorService],
  exports: [DoctorService],
  controllers: [DoctorController],
})
export class DoctorModule {}
