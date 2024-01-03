import { combineReducers } from '@reduxjs/toolkit';

// user imports
import { userGetAllReducer } from '../features/user/getAll/slice';
import { userSignUpSReducer } from '../features/user/signUp/slice';
import { activateCountReducer } from '../features/user/activateCount/slice';

// doctor imports
import { DoctorCreateReducer } from '../features/doctor/create/slice';
import { DoctorDeleteReducer } from '../features/doctor/delete/slice';
import { DoctorGetAllReducer } from '../features/doctor/getAll/slice';
import { DoctorUpdateReducer } from '../features/doctor/update/slice';

// patient imports
import { PatientCreateReducer } from '../features/patient/create/slice';
import { PatientDeleteReducer } from '../features/patient/delete/slice';
import { PatientGetAllReducer } from '../features/patient/getAll/slice';
import { PatientUpdateReducer } from '../features/patient/update/slice';
import { PatientFindOneReducer } from '../features/patient/findOne/slice';

// typeOfDocument imports
import { TypeOfDocumentGetAllReducer } from '../features/typeOfDocument/getAll/slice';

// module imports
import { ModulesCreateReducer } from '../features/modules/create/slice';
import { ModulesGetAllReducer } from '../features/modules/getAll/slice';
import { ModulesUpdateReducer } from '../features/modules/update/slice';

// specialty imports
import { SpecialtyGetAllReducer } from '../features/specialty/getAll/slice';

// invoice imports
import { InvoicesGetAllReducer } from '../features/invoices/getAll/slice';
import { InvoicesUpdateReducer } from '../features/invoices/update/slice';
import { InvoicesfindOneReducer } from '../features/invoices/findOne/slice';

// medicalAppointment imports
import { MedicalAppointmentCreateReducer } from '../features/medicalAppointment/create/slice';
import { MedicalAppointmentDeleteReducer } from '../features/medicalAppointment/delete/slice';
import { MedicalAppointmentGetAllReducer } from '../features/medicalAppointment/getAll/slice';
import { MedicalAppointmentUpdatedReducer } from '../features/medicalAppointment/update/slice';
import { MedicalAppointmentFindOneReducer } from '../features/medicalAppointment/findOne/slice';
import { MedicalAppointmentGetAllByIdReducer } from '../features/medicalAppointment/getAllById/slice';

// medicalHistory imports
import { MedicalHistoryCreateReducer } from '../features/medicalHistory/create/slice';
import { MedicalHistoryGetAllReducer } from '../features/medicalHistory/getAll/slice';
import { MedicalHistoryUpdateReducer } from '../features/medicalHistory/update/slice';
import { MedicalHistoryFindOneReducer } from '../features/medicalHistory/findOne/slice';

// medicalReport imports
import { MedicalReportCreateReducer } from '../features/medicalReport/create/slice';
import { MedicalReportFindOneReducer } from '../features/medicalReport/findOne/slice';

// schedule imports
import { ScheduleFilterByDayReducer } from '../features/schedule/filterByDay/slice';
import { ScheduleAppointmentHistoryReducer } from '../features/schedule/appointmentHistory/slice';
import { ScheduleFilterByFutureAppointmentsReducer } from '../features/schedule/filterByFutureAppointments/slice';
import { ScheduleFilterByCancelledAppointmentsReducer } from '../features/schedule/filterByCancelledAppointments/slice';

// roles imports
import { RolesGetAllReducer } from '../features/roles/getAll/slice';

// permission imports
import { PermissionsCreateReducer } from '../features/permissions/create/slice';
import { PermissionsUpdateReducer } from '../features/permissions/update/slice';
import { PermissionsGetAllByRoleReducer } from '../features/permissions/getAllByRole/slice';

/**
 * Reducers
 */
export const RootReducer = combineReducers({
    signUp: userSignUpSReducer,
    activateCount: activateCountReducer,
    getAllUsers: userGetAllReducer,
    doctorCreated: DoctorCreateReducer,
    doctorDeleted: DoctorDeleteReducer,
    doctorGetAll: DoctorGetAllReducer,
    doctorUpdated: DoctorUpdateReducer,
    patientCreated: PatientCreateReducer,
    patientDeleted: PatientDeleteReducer,
    patientFindOne: PatientFindOneReducer,
    patientGetAll: PatientGetAllReducer,
    patientUpdate: PatientUpdateReducer,
    typeOfDocumentGetAll: TypeOfDocumentGetAllReducer,
    specialtyGetAll: SpecialtyGetAllReducer,
    moduleCreated: ModulesCreateReducer,
    modulesGetAll: ModulesGetAllReducer,
    modulesUpdate: ModulesUpdateReducer,
    invoicesfindOne: InvoicesfindOneReducer,
    invoicesGetAll: InvoicesGetAllReducer,
    invoicesUpdated: InvoicesUpdateReducer,
    medicalAppointmentCreated: MedicalAppointmentCreateReducer,
    medicalAppointmentDelete: MedicalAppointmentDeleteReducer,
    medicalAppointmentFindOne: MedicalAppointmentFindOneReducer,
    medicalAppointmentGetAll: MedicalAppointmentGetAllReducer,
    medicalAppointmentGetAllById: MedicalAppointmentGetAllByIdReducer,
    medicalAppointmentUpdated: MedicalAppointmentUpdatedReducer,
    medicalHistoryCreated: MedicalHistoryCreateReducer,
    medicalHistoryFindOne: MedicalHistoryFindOneReducer,
    medicalHistoryGetAll: MedicalHistoryGetAllReducer,
    medicalHistoryUpdated: MedicalHistoryUpdateReducer,
    medicalReportCreate: MedicalReportCreateReducer,
    medicalReportFindOne: MedicalReportFindOneReducer,
    scheduleAppointmentHistory: ScheduleAppointmentHistoryReducer,
    scheduleFilterByDay: ScheduleFilterByDayReducer,
    scheduleFilterByFutureAppointments:
        ScheduleFilterByFutureAppointmentsReducer,
    scheduleFilterByCancelledAppointments:
        ScheduleFilterByCancelledAppointmentsReducer,
    rolesGetAll: RolesGetAllReducer,
    permissionsCreate: PermissionsCreateReducer,
    permissionsGetAllByRole: PermissionsGetAllByRoleReducer,
    permissionsUpdate: PermissionsUpdateReducer,
});
