import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalReportController } from '../../controller/medicalReport/medicalReport.controller';
import {
  MedicalReport,
  MedicalReportSchema,
} from '../../../domain/collections/medicalReport/schema/medicalReport.entity';
import { MedicalReportService } from '../../../application/medicalReport/medicalReport.service';

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
