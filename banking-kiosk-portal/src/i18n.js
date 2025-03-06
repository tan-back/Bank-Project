import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationHI from "./locales/hi.json";
import translationMR from "./locales/mr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    hi: { translation: translationHI },
    mr: { translation: translationMR }
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
