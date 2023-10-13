import { UserSessionState } from "./types";

/**
 * State initial userSession
 */
export const initialStateUserSession: UserSessionState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
      email: "",
      password: "",
      token: "",
      role: "",
      _idUser: "",
  }
  };