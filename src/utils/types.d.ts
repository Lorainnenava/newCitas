/**
 * Type RequestUser
 */
export type RequestUser = {
  sub: string;
  name: string;
  email: string;
  typeDocument: string;
  documentNumber: number;
  iat: number;
  exp: number;
};
