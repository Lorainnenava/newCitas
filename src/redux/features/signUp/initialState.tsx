import { UserSignUpState } from "./types";

export const initialStateSignUp: UserSignUpState = {
  loading: false,
  error: undefined,
  success: false,
  data: {
    name: "",
    _idtypeOfDocument: "",
    identification: 0,
    mobileNumber: 0,
    email: "",
    password: "",
    role: "usuario",
  },
};
