import { Doctor, DoctorSchema } from './entities/doctor/doctor.entity';
import { Invoice, InvoiceSchema } from './entities/invoice/invoice.entity';
import {
  MedicalAppointment,
  MedicalAppointmentSchema,
} from './entities/medicalAppointment/medicalAppointment.entity';
import {
  MedicalHistory,
  MedicalHistorySchema,
} from './entities/medicalHistory/medicalHistory.entity';
import {
  MedicalReport,
  MedicalReportSchema,
} from './entities/medicalReport/medicalReport.entity';
import { ModuleSchema, Modules } from './entities/module/module.entity';
import { Patient, PatientSchema } from './entities/patient/patient.entity';
import {
  Permission,
  PermissionSchema,
} from './entities/permission/permission.entity';
import { Rol, RolSchema } from './entities/rol/rol.entity';
import { Session, SessionSchema } from './entities/session/session.entity';
import {
  Specialty,
  SpecialtySchema,
} from './entities/specialty/specialty.entity';
import {
  TypeOfDocument,
  typeOfDocumentSchema,
} from './entities/typeOfDocument/typeOfDocument.entity';
import { User, userSchema } from './entities/user/user.entity';

/**
 * This define the set of the entities and schemas
 */
export const Entities = [
  { name: Doctor.name, schema: DoctorSchema },
  { name: Invoice.name, schema: InvoiceSchema },
  { name: MedicalAppointment.name, schema: MedicalAppointmentSchema },
  { name: MedicalHistory.name, schema: MedicalHistorySchema },
  { name: MedicalReport.name, schema: MedicalReportSchema },
  { name: Modules.name, schema: ModuleSchema },
  { name: Patient.name, schema: PatientSchema },
  { name: Permission.name, schema: PermissionSchema },
  { name: Rol.name, schema: RolSchema },
  { name: Session.name, schema: SessionSchema },
  { name: Specialty.name, schema: SpecialtySchema },
  { name: TypeOfDocument.name, schema: typeOfDocumentSchema },
  { name: User.name, schema: userSchema },
];
