import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalReport,
  MedicalReportSchema,
} from '../../../domain/entities/medicalReport/medicalReport.entity';
import { MedicalReportRepository } from '../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { MedicalReportController } from '../../../infrastructure/controller/medicalReport/medicalReport.controller';
import { MedicalReportCreateService } from '../../../application/services/medicalReport/medicalReportCreate.service';
import { MedicalReportGetAllService } from '../../../application/services/medicalReport/medicalReportGetAll.service';
import { MedicalReportFindByIdService } from '../../../application/services/medicalReport/medicalReportFindById.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalReport.name, schema: MedicalReportSchema },
    ]),
  ],
  providers: [
    MedicalReportRepository,
    MedicalReportCreateService,
    MedicalReportFindByIdService,
    MedicalReportGetAllService,
  ],
  exports: [
    MedicalReportCreateService,
    MedicalReportFindByIdService,
    MedicalReportGetAllService,
  ],
  controllers: [MedicalReportController],
})
export class MedicalReportModule {}
