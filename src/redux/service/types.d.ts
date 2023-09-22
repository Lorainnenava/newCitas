import { SerializedError } from "@reduxjs/toolkit";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

export interface IUser {
  email?: string;
  password?: string;
  role?: string;
  user: IUseCheck;
  error?: SerializedError | undefined;
  status?: QueryStatus | undefined;
  msg?: string;
}
export interface IUseCheck {
  email?: string;
  _id?: string;
  _idtypeOfDocument?: string;
  identification?: number;
  mobileNumber?: number;
  name?: string;
  password?: string;
  role?: string;
}
export interface ITypeDocument {
  typeOfDocument?: string;
  _id?: string;
}

export interface IDating {
  token: string;
  date?: string;
  doctor?: {
    name?: string;
    specialty?: string;
    _id?: string;
  };
  specialty?: {
    specialty?: string;
    _id?: string;
  };
  state?: boolean;
  statusAppointment?: boolean;
  dataState?: { statusAppointment: boolean };
  updatedAt?: string;
  _id?: string;
  _idUser?: {
    email?: string;
    identification?: number;
    mobileNumber?: number;
    name?: string;
    password?: string;
    role?: string;
    _id?: string;
    _idtypeOfDocument?: { _id?: string; typeOfDocument?: string };
  };
}
export interface IDoctor {
  _id?: string;
  specialty?: string;
  name?: string;
}
