import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MedicalReport,
  MedicalReportSchema,
} from '../../../domain/entities/medicalReport/medicalReport.entity';
import { MedicalReportService } from '../../../application/services/medicalReport/medicalReport.service';
import { MedicalReportController } from '../../../infrastructure/controller/medicalReport/medicalReport.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MedicalReport.name, schema: MedicalReportSchema },
    ]),
  ],
  providers: [MedicalReportService],
  exports: [MedicalReportService],
  controllers: [MedicalReportController],
})
export class MedicalReportModule {}
