import { FC } from "react";
import { TProtectedLogin } from "./types";
import { useRouter } from "next/router";

export const RouteProtectedIsLogin: FC<TProtectedLogin> = ({
  isAllowed,
  children,
  redirectTo = "/Admin",
}) => {
  const router = useRouter();
  if (isAllowed) {
    return router.push(redirectTo);
  }
  return children;
};
