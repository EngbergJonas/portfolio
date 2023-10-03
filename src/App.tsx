import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = ['en', 'fi', 'sv'];

const App = () => {
  const { t } = useTranslation();

  const [language, setLanguage] = useState('en');

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <div data-testid="app-view">
      <header>
        <h1>{t('frontPageTitle')}</h1>
      </header>
      <div className="flex flex-row gap-2" data-testid="language-switch">
        {languages.map((l) => (
          <button
            key={l}
            className="border-gray-600 border-2 px-2"
            data-testid="lang-btn-en"
            onClick={() => setLanguage(l)}
          >
            {t(l)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
