"use client";

import { ReactNode, useEffect } from "react";
import "@/app/i18n"; // Initializes i18next
import i18n from "i18next";

export default function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Set the initial lang attribute
    document.documentElement.lang = i18n.language || "en";

    // Update html[lang] whenever the language changes
    const handleLangChange = (lng: string) => {
      document.documentElement.lang = lng;
    };

    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, []);

  return <>{children}</>;
}
