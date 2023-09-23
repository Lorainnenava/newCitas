import { ITypeDocument } from "../../api/Queries/types";

export type TDataRegistration = {
  firstName?: string;
  secondName?: string;
  firstSurname?: string;
  secondSurname?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  gender?: string;
  age?: number;
  typeOfDocument?: string;
  identification?: number;
  email?: string;
  phoneNumber?: number;
  address?: string;
  placeOfResidence?: string;
  allergies?: string;
  surgeries?: string;
  bloodType?: string;
  illnesses?: string;
  observations?: string;
};
export const defaultDataForm: TDataRegistration = {
  firstName: "",
  secondName: "",
  firstSurname: "",
  secondSurname: "",
  dateOfBirth: "",
  placeOfBirth: "",
  gender: "",
  age: 0,
  typeOfDocument: "",
  identification: 0,
  email: "",
  phoneNumber: 0,
  address: "",
  allergies: "",
  surgeries: "",
  bloodType: "",
  illnesses: "",
  observations: "",
};

export type TRegisterPatient = {
  handleChangue: (
    e?: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event?: FormEvent<HTMLFormElement>) => Promise<void>;
  handleChangueSelect: (
    event:
      | ChangeEvent<{
          value: unknown;
        }>
      | SelectChangeEvent<unknown>
  ) => void;
  dataForm?: TDataRegistration;
  required?: boolean;
  dataSelects?: {
    dataDocument?: ITypeDocument[];
  };
  loading: boolean;
};
