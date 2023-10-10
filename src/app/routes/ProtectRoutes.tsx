"use client";
import { userLogued } from "@/redux/features/userLogued/request";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const ProtectRoutes = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession({ required: true });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const expires = session?.expires;
  const user = useAppSelector((state) => state.root.userLogued);
  console.log(user);

  useEffect(() => {
    if (!!session?.user?.token) {
      dispatch(userLogued(session?.user.token));
      console.log(session, "🐱‍👓🐱‍👓🐱‍👓🐱‍👓");
    }
  }, [session, dispatch]);

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (status === "authenticated" && session) {
    return children;
  } else if (
    Date.now() < Number(expires) * 1000 ||
    !session ||
    (status !== "authenticated" && status !== "loading")
  ) {
    console.log("debes iniciar session");
    router.push("/SignIn");
  }
};
export default ProtectRoutes;
