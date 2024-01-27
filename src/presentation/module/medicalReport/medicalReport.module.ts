import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalReport,
  MedicalReportSchema,
} from '../../../domain/entities/medicalReport/medicalReport.entity';
import { MedicalReportRepository } from '../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { MedicalReportCreateService } from '../../../application/services/medicalReport/medicalReportCreate.service';
import { MedicalReportsGetAllService } from '../../../application/services/medicalReport/medicalReportGetAll.service';
import { MedicalReportFindByIdService } from '../../../application/services/medicalReport/medicalReportFindById.service';
import { MedicalReportController } from '../../controller/medicalReport/medicalReport.controller';

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
    MedicalReportsGetAllService,
  ],
  exports: [
    MedicalReportCreateService,
    MedicalReportFindByIdService,
    MedicalReportsGetAllService,
  ],
  controllers: [MedicalReportController],
})
export class MedicalReportModule {}
