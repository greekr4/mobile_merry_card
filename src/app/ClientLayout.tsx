"use client";

import { NavBar } from "@/component/navbar/NavBar";
import { Box } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // 인덱스(/)에서는 NavBar 숨김
  const hideNav = pathname === "/";

  return (
    <>
      <main>{children}</main>
      {!hideNav && <NavBar />}
    </>
  );
};
