"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviderCustom({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
