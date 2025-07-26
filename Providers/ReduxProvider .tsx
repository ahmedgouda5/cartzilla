// app/providers.tsx
"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import AOSProvider from "@/components/AOSProvider";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return  <>
      <AOSProvider />
      <Provider store={store}>{children}</Provider>
    </>
}
