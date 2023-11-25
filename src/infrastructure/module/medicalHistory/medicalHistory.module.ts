import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import {
  MedicalHistory,
  MedicalHistorySchema,
} from '../../../domain/collections/medicalHistory/schema/medicalHistory.entity';
import { MedicalHistoryService } from '../../../application/medicalHistory/medicalHistory.service';
import { MedicalHistoryController } from '../../controller/medicalHistory/medicalHistory.controller';

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
