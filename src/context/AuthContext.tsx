"use client";
import { createContext, useEffect, useState } from "react";
import jwt, { JwtPayload } from "jsonwebtoken";
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
  const [decoded, setDecoded] = useState<jwt.JwtPayload | null>(null);
  const [token, setToken] = useState("");
  const router = useRouter();

  /**
   * autenticacion en el login
   */
  const login = (userData: any) => {
    if (userData?.token) {
      setUser(userData?.user);
      setDecoded(jwt.decode(userData?.token) as JwtPayload);
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
    // } else if (decoded?.exp) {
    //   const expirationDate = new Date(decoded.exp * 1000);
    //   const currentDate = new Date();
    //   if (currentDate > expirationDate) {
    //     router.push("/Login");
    //     sessionStorage.clear();
    //     setUser(initialValue.user);
    //     toast(`Su tiempo de expiración a vencido`, {
    //       autoClose: 2000,
    //       type: "error",
    //       hideProgressBar: true,
    //     });
    //   }
    }
  };

  const logOut = () => {
    setToken("");
    router.push("/Login");
    sessionStorage.clear();
    setUser(initialValue.user);
  };

  console.log(decoded)
/* 
  useEffect(() => {
    const handleGlobalClick = () => {
      if (decoded?.exp) {
        const expirationDate = new Date(decoded.exp * 1000);
        const currentDate = new Date();
        if (currentDate > expirationDate) {
          console.log("❓❓❓❓")
          router.push("/Login");
          sessionStorage.clear();
          setUser(initialValue.user);
          toast(`Su tiempo de expiración a vencido`, {
            autoClose: 2000,
            type: "error",
            hideProgressBar: true,
          });
        }
      }
    };
    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [router, decoded]); */

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
