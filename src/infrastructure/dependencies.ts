import { Provider } from '@nestjs/common';
import { RolRepository } from './repository/rol/rol.repository';
import { UserRepository } from './repository/user/user.repository';
import { ModuleRepository } from './repository/module/module.repository';
import { DoctorRepository } from './repository/doctor/doctor.repository';
import { InvoiceRepository } from './repository/invoice/invoice.repository';
import { PatientRepository } from './repository/patient/patient.repository';
import { SessionRepository } from './repository/session/session.repository';
import { SpecialtyRepository } from './repository/specialty/specialty.repository';
import { PermissionRepository } from './repository/permission/permission.repository';
import { MedicalReportRepository } from './repository/medicalReport/medicalReport.repository';
import { MedicalHistoryRepository } from './repository/medicalHistory/medicalHistory.repository';
import { TypeOfDocumentRepository } from './repository/typeOfDocument/typeOfDocument.repository';
import { MedicalAppointmentRepository } from './repository/medicalAppointment/medicalAppointment.repository';

/**
 * This module injects the dependencies of the infrastructure
 */
export const DependenciesInjectionInfrastructure: Provider[] = [
  {
    provide: 'DoctorRepository',
    useClass: DoctorRepository,
  },
  {
    provide: 'InvoiceRepository',
    useClass: InvoiceRepository,
  },
  {
    provide: 'MedicalAppointmentRepository',
    useClass: MedicalAppointmentRepository,
  },
  {
    provide: 'MedicalHistoryRepository',
    useClass: MedicalHistoryRepository,
  },
  {
    provide: 'MedicalReportRepository',
    useClass: MedicalReportRepository,
  },
  {
    provide: 'ModuleRepository',
    useClass: ModuleRepository,
  },
  {
    provide: 'PatientRepository',
    useClass: PatientRepository,
  },
  {
    provide: 'PermissionRepository',
    useClass: PermissionRepository,
  },
  {
    provide: 'RolRepository',
    useClass: RolRepository,
  },
  {
    provide: 'SessionRepository',
    useClass: SessionRepository,
  },
  {
    provide: 'SpecialtyRepository',
    useClass: SpecialtyRepository,
  },
  {
    provide: 'TypeOfDocumentRepository',
    useClass: TypeOfDocumentRepository,
  },
  {
    provide: 'UserRepository',
    useClass: UserRepository,
  },
];
