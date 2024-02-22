import { Module } from '@nestjs/common';
import { MedicalHistoryCreateService } from './create/medicalHistoryCreate.service';
import { MedicalHistoryUpdateService } from './update/medicalHistoryUpdate.service';
import { MedicalHistoriesGetAllService } from './getAll/medicalHistoriesGetAll.service';
import { MedicalHistoryFindByIdService } from './findById/medicalHistoryFindById.service';

@Module({
  providers: [
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
})
export class MedicalHistoryAplicationModule {}
