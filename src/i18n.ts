import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEn from './assets/en.json';
import translationsFi from './assets/fi.json';
import translationsSv from './assets/sv.json';

// the translations
const resources = {
  en: {
    translation: translationsEn,
  },
  fi: {
    translation: translationsFi,
  },
  sv: {
    translation: translationsSv,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
