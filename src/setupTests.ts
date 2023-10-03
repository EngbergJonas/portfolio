/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom';

// disable console statements for tests
global.console = {
  ...console,
  // uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  warn: jest.fn(),
  // error: jest.fn(),
};

jest.mock('react-i18next', () => {
  let currentLanguage = 'en'; // Initialize with the default language

  return {
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          language: currentLanguage,
          changeLanguage: (language: 'en' | 'fi' | 'sv') => {
            currentLanguage = language;
            return Promise.resolve();
          },
        },
      };
    },
    initReactI18next: {
      type: '3rdParty',
      init: () => {},
    },
  };
});
