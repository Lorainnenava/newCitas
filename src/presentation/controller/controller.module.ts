import { Module } from '@nestjs/common';
import { RolController } from './rol/rol.controller';
import { UserController } from './user/user.controller';
import { ModuleController } from './module/module.controller';
import { DoctorController } from './doctor/doctor.controller';
import { InvoiceController } from './invoice/invoice.controller';
import { SessionController } from './session/session.controller';
import { PatientController } from './patient/patient.controller';
import { ScheduleController } from './schedule/schedule.controller';
import { SpecialtyController } from './specialty/specialty.controller';
import { ApplicationModule } from '../../application/application.module';
import { PermissionController } from './permission/permission.controller';
import { MedicalReportController } from './medicalReport/medicalReport.controller';
import { TypeOfDocumentController } from './typeOfDocument/typeOfDocument.controller';
import { MedicalHistoryController } from './medicalHistory/medicalHistory.controller';
import { MedicalAppointmentController } from './medicalAppointment/medicalAppointment.controller';
import { FileController } from './ownCloud/owncloud.controller';

/**
 * Module of presentatión layer
 */
@Module({
  imports: [ApplicationModule],
  controllers: [
    PatientController,
    UserController,
    SessionController,
    DoctorController,
    InvoiceController,
    MedicalAppointmentController,
    MedicalHistoryController,
    MedicalReportController,
    ScheduleController,
    ModuleController,
    PermissionController,
    RolController,
    SpecialtyController,
    TypeOfDocumentController,
    FileController,
  ],
})
export class PresentationModule {}
