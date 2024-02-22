import { Module } from '@nestjs/common';
import { DoctorController } from './doctor/doctor.controller';
import { InvoiceController } from './invoice/invoice.controller';
import { MedicalAppointmentController } from './medicalAppointment/medicalAppointment.controller';
import { MedicalHistoryController } from './medicalHistory/medicalHistory.controller';
import { MedicalReportController } from './medicalReport/medicalReport.controller';
import { ModuleController } from './module/module.controller';
import { PatientController } from './patient/patient.controller';
import { PermissionController } from './permission/permission.controller';
import { RolController } from './rol/rol.controller';
import { ScheduleController } from './schedule/schedule.controller';
import { SessionController } from './session/session.controller';
import { SpecialtyController } from './specialty/specialty.controller';
import { TypeOfDocumentController } from './typeOfDocument/typeOfDocument.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [
    DoctorController,
    InvoiceController,
    MedicalAppointmentController,
    MedicalHistoryController,
    MedicalReportController,
    ModuleController,
    PatientController,
    PermissionController,
    RolController,
    ScheduleController,
    SessionController,
    SpecialtyController,
    TypeOfDocumentController,
    UserController,
  ],
})
export class ControllerModule {}
