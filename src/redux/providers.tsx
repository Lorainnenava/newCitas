"use client";

import { Provider } from "react-redux";
import { userStore } from "./store/configRedux";
import { AuthProvider } from "@/context/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={userStore}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}

export default Providers;
