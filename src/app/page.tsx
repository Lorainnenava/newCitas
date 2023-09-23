"use client";
import { useAuthStore } from "@/middleware";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useLazyGetOneUserQuery } from "@/redux/service/resApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container } from "@/utils/styles";
import Nav from "@/common/Nav";
import { Box } from "@mui/material";
import { Layout } from "@/common/layout";

export default function Home() {
  const router = useRouter();
  const setLogOut = useAuthStore((state: any) => state.logOut);
  const profileAuth = useAuthStore((state: any) => state.profile);
  const [getUser, { error }] = useLazyGetOneUserQuery();
  const [usuario, setUsuario] = useState({
    email: null,
    role: null,
  });

  /**
   * obtener el usuario logueado
   */
  useEffect(() => {
    const userLoges = JSON.parse(localStorage.getItem("auth") || "null") as
      | null;
    if (userLoges) {
      setUsuario(userLoges);
    } else {
      setUsuario({
        email: null,
        role: null,
      });
    }
  }, []);

  /**
   * verificar si el token ya expiro
   */
  useEffect(() => {
    if (profileAuth) {
      getUser(profileAuth.token);
      const handleGlobalClick = () => {
        if (error) {
          setLogOut("", null);
          router.push("/");
          toast(`Su tiempo de expiración a vencido`, {
            autoClose: 2000,
            type: "error",
            hideProgressBar: true,
          });
        }
      };
      document.addEventListener("click", handleGlobalClick);
      return () => {
        document.removeEventListener("click", handleGlobalClick);
      };
    }
  }, [profileAuth, error, setLogOut, router, getUser]);

  return (
    <Container>
      <Nav profileAuth={profileAuth} />
      <Box sx={{ width: "100%", height: "90%", display: "flex" }}>
        {profileAuth?.user?.email && <Layout profileAuth={profileAuth} />}
        <Box
          sx={{
            backgroundColor: "rgb(220, 220, 220)",
            color: "rgb(0, 0, 0)",
            display: "flex",
            width: "100%",
            overflow: "auto",
            padding: `${
              profileAuth &&
              location?.pathname !== "/admin" &&
              location?.pathname !== "/user"
                ? "20px 0px"
                : ""
            }`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              margin: `${
                profileAuth &&
                location?.pathname !== "/admin" &&
                location?.pathname !== "/user"
                  ? "0 20px"
                  : ""
              }`,
            }}
          ></Box>
        </Box>
      </Box>
    </Container>
  );
}
