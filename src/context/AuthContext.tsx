"use client";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type IAuthContext = {
  user: any;
  login: (userData: any) => void;
  logOut: () => void;
  token?: string | null;
  isLogged: boolean;
};

const initialValue = {
  user: {
    email: "",
    identification: "",
    mobileNumber: "",
    name: "",
    password: "",
    role: "",
  },
  token: "",
  login: (userData: any) => {},
  logOut: () => {},
  isLogged: false,
};

const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(initialValue?.user);
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

  /**
   * autenticacion en el login
   */
  const login = (userData: any) => {
    console.log(userData)
    if (userData?.token) {
      setUser(userData?.user);
      router.push("/Inicio");
      setIsLogged(true);
      sessionStorage.setItem("auth", JSON.stringify(userData));
      const authString = sessionStorage.getItem("auth");
      const auth: IAuthContext | null = authString
        ? JSON.parse(authString)
        : null;
      const token = auth?.token;
      if (token) {
        setToken(token);
      } else {
        setIsLogged(false);
        router.push("/Login");
      }
    } else if (isLogged === false) {
      setToken("");
      toast(`Su tiempo de expiración a vencido`, {
        autoClose: 2000,
        type: "error",
        hideProgressBar: true,
      });
      router.push("/Login");
      setUser(initialValue.user);
      sessionStorage.clear();
    }
  };

  const logOut = () => {
    setToken("");
    router.push("/Login");
    sessionStorage.clear();
    setUser(initialValue.user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        token,
        isLogged,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
