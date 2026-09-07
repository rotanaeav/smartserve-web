import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@/locales/en/translation.json";
import translationKM from "@/locales/km/translation.json";

const resources = {
  km: { translation: translationKM },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  supportedLngs: ["km", "en"],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== "undefined") {
  const stored = window.localStorage.getItem("i18nextLng");
  if (stored && i18n.languages.includes(stored)) {
    i18n.changeLanguage(stored);
  }
}
