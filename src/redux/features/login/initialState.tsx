import { UserLoginState } from "./types";

export const initialStateUserLogin: UserLoginState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
      msg: "",
      token: "",
      user: {
        email: "",
        identification: "",
        mobileNumber: "",
        name: "",
        password: "",
        role: "",
      },
    },
  };