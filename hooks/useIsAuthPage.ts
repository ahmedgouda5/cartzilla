"use client";

import { usePathname } from "next/navigation";

export const useIsAuthPage = () => {
  const pathname = usePathname();
  return pathname === "/register" ; 
};
