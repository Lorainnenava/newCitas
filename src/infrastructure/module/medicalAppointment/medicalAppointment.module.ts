import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from '../../../domain/collections/medicalAppointments/schema/medicalAppointment.entity';
import { MedicalAppointmentService } from '../../../application/medicalAppointment/medicalAppointment/medicalAppointment.service';
import { MedicalAppointmentController } from '../../controller/medicalAppointment/medicalAppointment.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalAppointment.name, schema: MedicalAppointmentSchema },
    ]),
  ],
  providers: [MedicalAppointmentService],
  exports: [MedicalAppointmentService, MongooseModule],
  controllers: [MedicalAppointmentController],
})
export class MedicalAppointmentModule {}
