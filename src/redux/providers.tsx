"use client";

import { Provider } from "react-redux";
import { Userstore } from "./store/configRedux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={Userstore}>{children}</Provider>;
}

export default Providers;
