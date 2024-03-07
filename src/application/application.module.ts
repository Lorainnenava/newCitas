import { Global, Module } from '@nestjs/common';
import { UtilsModule } from '../utils/utils.module';
import { EmailApplicationModule } from './services/emails/emails.module';
import { RolApplicationModule } from './services/rol/rolApplication.module';
import { UserApplicationModule } from './services/user/userApplication.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { DoctorApplicationModule } from './services/doctor/doctorApplication.module';
import { ModuleApplicationModule } from './services/module/moduleApplication.module';
import { PatientApplicationModule } from './services/patient/patientApplication.module';
import { InvoiceApplicationModule } from './services/invoice/invoiceApplication.module';
import { SessionApplicationModule } from './services/session/sessionApplication.module';
import { SpecialtyApplicatiomModule } from './services/specialty/specialtyApplication.module';
import { PermissionApplicationModule } from './services/permissions/permissionApplication.module';
import { MedicalReportApplicationModule } from './services/medicalReport/medicalReportApplication.module';
import { MedicalHistoryAplicationModule } from './services/medicalHistory/medicalHistoryApplication.module';
import { TypeOfDocumentApplicationModule } from './services/typeOfDocument/typeOfDocumentApplication.module';
import { MedicalAppointmentApplicationModule } from './services/medicalAppointment/medicalAppointmentApplication.module';
import { DocumentApplicationModule } from './services/document/document.module';

/**
 * Module of applicatión layer
 */
@Module({
  imports: [
    InfrastructureModule,
    UtilsModule,
    EmailApplicationModule,
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
    DocumentApplicationModule,
  ],
  exports: [
    EmailApplicationModule,
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
    DocumentApplicationModule,
  ],
})
@Global()
export class ApplicationModule {}
