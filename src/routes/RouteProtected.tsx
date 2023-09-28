import { TProtectedLogin } from "./types";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

export const ProtectedRoute: FC<TProtectedLogin> = ({
  children,
}): React.ReactNode => {
  const userSelector = useAppSelector((state) => state.root.userLogin);
  const router = useRouter();

  useEffect(() => {
    if (!userSelector?.data?.token) {
      console.log("primero debes logearte");
      router.push("/Login");
    }
  }, [userSelector, router]);

  return children;
};

export default ProtectedRoute;
