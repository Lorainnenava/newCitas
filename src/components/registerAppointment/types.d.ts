import { useState } from "react";
export type TDataForm = {
  date?: any;
  doctor?: string;
  specialty?: string;
  timeAppointment?: string;
};
export type TDataProfileAuth = {
  msg: string;
  token: string;
  user: Object;
};
export type TDataUser = {
  profileAuth?: Object<TDataProfileAuth>;
};
export type TRegisterAppointment = {
  handleChangue: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  loading?: boolean;
  dataForm: TDataForm;
  required?: boolean;
  dataSelects?: { dataDoctor: any; specialty: any };
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  handleChangueSelect: (
    event:
      | React.ChangeEvent<{
          value: unknown;
        }>
      | SelectChangeEvent<unknown>
  ) => void;
  dataList: any;
  validateLoading: boolean;
  setList: any;
  list: boolean;
  setDataForm: any;
};

export type TListDoctorAppointment = {
  dataList: any;
  validateLoading: boolean;
  loading?: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setDataForm: any;
  dataForm: any;
};

export type TColumn = {
  _id?: number | string;
  doctor?: string;
  typeSpecialty?: {
    _id?: string;
    specialty?: any;
  };
  date?: any;
  timeAppointment?: any;
  name?: string;
  specialty?: any;
  _idSpecialty?: string;
};
