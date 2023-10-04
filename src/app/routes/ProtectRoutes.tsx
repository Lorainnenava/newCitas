"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export const ProtectRoutes = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession({ required: true });
  const router = useRouter();

  if (!session) {
    console.log("debes loguearte primero");
    router.push("SignIn");
  } else {
    return children;
  }
};
export default ProtectRoutes;
