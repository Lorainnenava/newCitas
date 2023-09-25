"use client";

import { Provider } from "react-redux";
import { Userstore } from "./store/configRedux";
import { AuthProvider } from "@/context/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={Userstore}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}

export default Providers;
