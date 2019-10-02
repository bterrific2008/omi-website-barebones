import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/*
    referencing
    https://medium.com/@jishnu61/6-easy-steps-to-localize-your-react-application-internationalization-with-i18next-8de9cc3a66a1
 */

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
      en: {
          translations: {
              Introduction: "Introduction",
          }
      },
      jap: {
          translations: {
              Introduction: "Introduction but Japanese",
          }
      }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // use content as keys
  interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ","
  },

  react: {
      wait: true
  }
});

export default i18n;