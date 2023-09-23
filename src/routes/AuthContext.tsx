import { createContext, useEffect, useState } from "react";
import { IUser } from "./types";

type IAuthContext = {
  state: {
    profile: {
      msg: string;
      token: string;
    };
    user: IUser;
  };
  /* login:({

  }: IUser) */
};

const initialValue = {
  state: {
    profile: {
      msg: "",
      token: "",
    },
    user: {
      email: "",
      identification: "",
      mobileNumber: "",
      name: "",
      password: "",
      role: "",
      _v: 0,
      _id: "",
      _idTypeDocument: "",
    },
  },
  login(userData: IUser) {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

export const useAuth = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(initialValue.state.user);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * autenticacion en el login
   */
  const login = (userData: IUser) => {
    setUser(userData);
    setIsLogged(true);
  };

  /**
   * ver si el token ya vencio
   */
  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{ state: { profile: { msg: "", token: "" }, user }/* , login  */}}
    >
      {children}
    </AuthContext.Provider>
  );
};
