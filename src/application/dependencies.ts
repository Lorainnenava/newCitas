import { Provider } from '@nestjs/common';
import { ConfirmationEmailApplicationModule } from './services/confirmationEmail/confirmationEmailApplication.module';
import { ConfirmationMedicalAppointmentApplicationModule } from './services/confirmationMedicalAppointment/confirmationMedicalAppointmentApplication.module';
import { DoctorApplicationModule } from './services/doctor/doctorApplication.module';
import { InvoiceApplicationModule } from './services/invoice/invoiceApplication.module';
import { MedicalAppointmentApplicationModule } from './services/medicalAppointment/medicalAppointmentApplication.module';
import { MedicalHistoryAplicationModule } from './services/medicalHistory/medicalHistoryApplication.module';
import { MedicalReportApplicationModule } from './services/medicalReport/medicalReportApplication.module';
import { ModuleApplicationModule } from './services/module/moduleApplication.module';
import { PatientApplicationModule } from './services/patient/patientApplication.module';
import { PermissionApplicationModule } from './services/permissions/permissionApplication.module';
import { RolApplicationModule } from './services/rol/rolApplication.module';
import { SessionApplicationModule } from './services/session/sessionApplication.module';
import { SpecialtyApplicatiomModule } from './services/specialty/specialtyApplication.module';
import { TypeOfDocumentApplicationModule } from './services/typeOfDocument/typeOfDocumentApplication.module';
import { UserApplicationModule } from './services/user/userApplication.module';

/**
 * Inyection of dependences application layer
 */
export const DependenciesApplicationInyection: Provider[] = [
  ConfirmationEmailApplicationModule,
  ConfirmationMedicalAppointmentApplicationModule,
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
];
