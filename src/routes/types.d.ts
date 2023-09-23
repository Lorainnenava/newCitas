export type TProtectedLogin = {
  isAllowed: boolean;
  children?: any;
  redirectTo: string;
};

export type IUser = {
  email: string;
  identification: string;
  mobileNumber: string;
  name: string;
  password: string;
  role: string;
  _v: number;
  _id: string;
  _idTypeDocument: string;
};