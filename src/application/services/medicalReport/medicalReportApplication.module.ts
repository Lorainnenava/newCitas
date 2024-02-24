import { Module } from '@nestjs/common';
import { MedicalReportCreateService } from './create/medicalReportCreate.service';
import { MedicalReportsGetAllService } from './getAll/medicalReportGetAll.service';
import { MedicalReportFindByIdService } from './findById/medicalReportFindById.service';

/**
 * Module for importing medicalReport services.
 */
@Module({
  providers: [
    MedicalReportCreateService,
    MedicalReportFindByIdService,
    MedicalReportsGetAllService,
  ],
  exports: [
    MedicalReportCreateService,
    MedicalReportFindByIdService,
    MedicalReportsGetAllService,
  ],
})
export class MedicalReportApplicationModule {}
