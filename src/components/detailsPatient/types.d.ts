import { TDataProfileAuth } from "../../containers/types";

export type TDetailsPatient = {
  id?: string;
  profileAuth?: TDataProfileAuth;
};

export type TDataPatientDetails = {
  address?: string;
  age?: number;
  dateOfBirth?: string;
  email?: string;
  gender?: string;
  idMedicalInformation?: {
    allergies?: string;
    bloodType?: string;
    illnesses?: string;
    observations?: string;
    surgeries?: string;
  };
  identification?: number;
  lasNames?: string;
  names?: string;
  phoneNumber?: number;
  placeOfBirth?: string;
  placeOfResidence?: string;
  typeDocument?: string;
};

export type TDetailsPatientV = {
  validateLoading: boolean;
  data?: TDataPatientDetails;
};
