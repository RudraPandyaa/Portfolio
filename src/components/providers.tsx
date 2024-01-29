"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
