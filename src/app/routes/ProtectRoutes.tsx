"use client";
import Loading from "@/common/loading/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import getData from "./getData";

/**
 * Función para proteger las rutas
 */
export const ProtectRoutes = async ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession({ required: true });
  const [sessionDeleted, setSessionDeleted] = useState(false)
  const router = useRouter();
  const expires = session?.expires;
  let data;
  let token;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem("auth");
  }
  const authorization = token ? JSON.parse(token) : null;

  try {
    if (authorization) {
      data = await getData(authorization);
      console.log(data);
    }

    if (status === "loading") {
      return <Loading />;
    }

    if (status === "authenticated" && session && sessionDeleted === false) {
      return <>{children}</>;
    } else if (
      Date.now() < Number(expires) * 1000 ||
      !session ||
      (status !== "authenticated" && status !== "loading") || !sessionDeleted
    ) {
      console.log("Debes iniciar sesión");
      router.push("/SignIn");
    }
  } catch (error) {
    typeof window !== 'undefined' ?
      localStorage.clear() : null
    setSessionDeleted(true)
    console.log(error);
  }
};

export default ProtectRoutes
