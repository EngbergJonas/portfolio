import { useEffect, useState } from 'react';
import LanguageButton from './LanguageButton';
import { Language, languages } from '../../interfaces/languageInterfaces';
import { useTranslation } from 'react-i18next';

const LanguageToggler = () => {
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  const [language, setLanguage] = useState<Language>(languages[0]);

  // Change i18n language language changes
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <div data-testid="language-handler" className="flex flex-row gap-2">
      {languages.map((l) => (
        <LanguageButton key={l} language={l} onClick={setLanguage} />
      ))}
    </div>
  );
};

export default LanguageToggler;
