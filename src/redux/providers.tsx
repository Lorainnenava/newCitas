"use client";

import { Provider } from "react-redux";
import { userStore } from "./store/configRedux";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={userStore}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
}

export default Providers;
