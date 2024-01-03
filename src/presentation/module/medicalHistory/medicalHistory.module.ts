import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalHistory,
  MedicalHistorySchema,
} from '../../../domain/entities/medicalHistory/medicalHistory.entity';
import { MedicalHistoryController } from '../../../infrastructure/controller/medicalHistory/medicalHistory.controller';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { MedicalHistoryCreateService } from '../../../application/services/medicalHistory/medicalHistoryCreate.service';
import { MedicalHistoryGetAllService } from '../../../application/services/medicalHistory/medicalHistoryGetAll.service';
import { MedicalHistoryUpdateService } from '../../../application/services/medicalHistory/medicalHistoryUpdate.service';
import { MedicalHistoryFindByIdService } from '../../../application/services/medicalHistory/medicalHistoryFindById.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalHistory.name, schema: MedicalHistorySchema },
    ]),
  ],
  providers: [
    MedicalHistoryRepository,
    MedicalHistoryCreateService,
    MedicalHistoryFindByIdService,
    MedicalHistoryGetAllService,
    MedicalHistoryUpdateService,
  ],
  exports: [
    MedicalHistoryCreateService,
    MedicalHistoryFindByIdService,
    MedicalHistoryGetAllService,
    MedicalHistoryUpdateService,
  ],
  controllers: [MedicalHistoryController],
})
export class MedicalHistoryModule {}
