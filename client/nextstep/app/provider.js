"use client";
import { ClerkProvider } from "@clerk/nextjs";

export const Providers = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};
