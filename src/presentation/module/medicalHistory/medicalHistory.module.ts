import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalHistory,
  MedicalHistorySchema,
} from '../../../domain/entities/medicalHistory/medicalHistory.entity';
import { MedicalHistoryService } from '../../../application/services/medicalHistory/medicalHistory.service';
import { MedicalHistoryController } from '../../../infrastructure/controller/medicalHistory/medicalHistory.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalHistory.name, schema: MedicalHistorySchema },
    ]),
  ],
  providers: [MedicalHistoryService],
  exports: [MedicalHistoryService],
  controllers: [MedicalHistoryController],
})
export class MedicalHistoryModule {}
