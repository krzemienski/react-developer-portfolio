import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi) // Load translation files
  .use(LanguageDetector) // Browser language detection
  .use(initReactI18next) // Initialize react-i18next
  .init({
    supportedLngs: ['en'], // Supported languages
    fallbackLng: 'en', // Default language
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to language packages
    },
  });

export default i18n;
