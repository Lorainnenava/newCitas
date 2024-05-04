/**
 * Type RequestUser
 */
export type RequestUser = {
  sub: string;
  name: string;
  email: string;
  roles: string;
  typeDocument: string;
  documentNumber: number;
  iat: number;
  exp: number;
};

/**
 * Type EmailRequestDto
 */
export type EmailRequestDto = {
  email: string;
  firstName: string;
  firstLastName: string;
  secondName?: string;
  secondLastName?: string;
};

/**
 * Type ConfirmationMedicalAppointmentRequestDto
 */
export type ConfirmationMedicalAppointmentRequestDtoRequestDto = {
  email: string;
  firstName: string;
  firstLastName: string;
  secondName?: string;
  secondLastName?: string;
  timeAppointment: string;
  doctor: string;
  date: string;
  specialty: string;
};

/**
 * Acciones
 */
export enum Action {
  Manage = 'manage', // permiso para todas las acciones
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}
