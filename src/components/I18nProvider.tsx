"use client";

import { ReactNode } from "react";
import "@/app/i18n"; // Initializes i18next

export default function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
