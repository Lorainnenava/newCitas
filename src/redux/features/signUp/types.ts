export interface UserSignUpState {
  loading: boolean;
  error: string | undefined;
  success: boolean;
  data: {
    name: string;
    _idtypeOfDocument: string;
    identification: number;
    mobileNumber: number;
    email: string;
    password: string;
    role: string;
  };
}
