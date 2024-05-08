import { Global, Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { SharedModule } from 'src/shared/shared.module';
import { DoctorApplicationModule } from './doctor/doctorApplication.module';
import { InvoiceApplicationModule } from './invoice/invoiceApplication.module';
import { PatientApplicationModule } from './patient/patientApplication.module';
import { MedicalAppointmentApplicationModule } from './medicalAppointment/medicalAppointmentApplication.module';
import { MedicalHistoryAplicationModule } from './medicalHistory/medicalHistoryApplication.module';
import { MedicalReportApplicationModule } from './medicalReport/medicalReportApplication.module';
import { ModuleApplicationModule } from './module/moduleApplication.module';
import { PermissionApplicationModule } from './permissions/permissionApplication.module';
import { RolApplicationModule } from './rol/rolApplication.module';
import { SessionApplicationModule } from './session/sessionApplication.module';
import { SpecialtyApplicatiomModule } from './specialty/specialtyApplication.module';
import { TypeOfDocumentApplicationModule } from './typeOfDocument/typeOfDocumentApplication.module';
import { UserApplicationModule } from './user/userApplication.module';

/**
 * Module of applicatión layer
 */
@Module({
  imports: [
    SharedModule,
    InfrastructureModule,
    SharedModule,
    DoctorApplicationModule,
    InvoiceApplicationModule,
    PatientApplicationModule,
    MedicalAppointmentApplicationModule,
    MedicalHistoryAplicationModule,
    MedicalReportApplicationModule,
    ModuleApplicationModule,
    PermissionApplicationModule,
    RolApplicationModule,
    SessionApplicationModule,
    SpecialtyApplicatiomModule,
    TypeOfDocumentApplicationModule,
    UserApplicationModule,
    TypeOfDocumentApplicationModule,
  ],
  exports: [
    DoctorApplicationModule,
    InvoiceApplicationModule,
    MedicalAppointmentApplicationModule,
    MedicalHistoryAplicationModule,
    MedicalReportApplicationModule,
    ModuleApplicationModule,
    PatientApplicationModule,
    PermissionApplicationModule,
    RolApplicationModule,
    SessionApplicationModule,
    SpecialtyApplicatiomModule,
    TypeOfDocumentApplicationModule,
    UserApplicationModule,
  ],
})
@Global()
export class ApplicationModule {}
