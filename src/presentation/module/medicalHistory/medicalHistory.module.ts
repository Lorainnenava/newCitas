import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalHistory,
  MedicalHistorySchema,
} from '../../../domain/entities/medicalHistory/medicalHistory.entity';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { MedicalHistoryCreateService } from '../../../application/services/medicalHistory/medicalHistoryCreate.service';
import { MedicalHistoryUpdateService } from '../../../application/services/medicalHistory/medicalHistoryUpdate.service';
import { MedicalHistoryFindByIdService } from '../../../application/services/medicalHistory/medicalHistoryFindById.service';
import { MedicalHistoriesGetAllService } from '../../../application/services/medicalHistory/medicalHistoriesGetAll.service';
import { MedicalHistoryController } from '../../controller/medicalHistory/medicalHistory.controller';

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
    MedicalHistoriesGetAllService,
    MedicalHistoryUpdateService,
  ],
  exports: [
    MedicalHistoryCreateService,
    MedicalHistoryFindByIdService,
    MedicalHistoriesGetAllService,
    MedicalHistoryUpdateService,
  ],
  controllers: [MedicalHistoryController],
})
export class MedicalHistoryModule {}
