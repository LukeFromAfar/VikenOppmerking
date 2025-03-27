import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['no', 'en'],
    fallbackLng: 'no',
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

  const currentLanguage = i18n.language;
  if (!currentLanguage || (currentLanguage !== 'no' && currentLanguage !== 'en')) {
    i18n.changeLanguage('no');
  }

export default i18n;