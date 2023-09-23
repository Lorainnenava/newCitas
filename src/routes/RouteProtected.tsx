import { TProtectedLogin } from "./types";
import { FC } from "react";
import { useRouter } from "next/router";

export const ProtectedRoute: FC<TProtectedLogin> = ({
  isAllowed,
  children,
  redirectTo = "/",
}) => {
  const router = useRouter();
  if (!isAllowed) {
    return router.push(redirectTo);
  }
  return children;
};
