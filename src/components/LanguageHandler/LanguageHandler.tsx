import { useEffect, useState } from 'react';
import LanguageButton from './LanguageButton';
import { useTranslation } from 'react-i18next';
import { Language } from '../../interfaces/common';
import { languages } from '../../utils/common';

const LanguageToggler = () => {
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  const [language, setLanguage] = useState<Language>(languages[0]);

  // Change i18n language when language changes
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <div data-testid="language-handler" className="hidden flex-row gap-2">
      {languages.map((l) => (
        <LanguageButton key={l} language={l} onClick={setLanguage} />
      ))}
    </div>
  );
};

export default LanguageToggler;
